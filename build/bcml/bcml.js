(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");


const BCML_Util = require('./util')
const BCML_Mod = require('./mod');
const BCML_ModLoader = require('./modloader');

BCML_Util.replaceFunc(World.prototype, {
	'login': function(old, ...params) {
		old(...params);
		BCML_ModLoader.Init();
	}
});
BCML_Util.replaceFunc(StageContainer.prototype, {
	'update': function (old, ...params) {
			old.call(this,...params);
			BCML_ModLoader.Update();
	}
});


window = Object.assign(window, {
	BCML_Mod,
	BCML_ModLoader
});

},{"./mod":2,"./modloader":3,"./util":4}],2:[function(require,module,exports){
// @ts-check

 /**
  * @abstract
  * @public
  */
class BCML_Mod {
	constructor() {

	}
	/**Initialise Mod */
    Init() {
        throw new Error("Init function not overidden");
	}
	/**Update Mod */
    Update() {
        throw new Error("Update function not overidden");
	}
}

module.exports = BCML_Mod;
},{}],3:[function(require,module,exports){
//@ts-check

const BCML_Mod = require('./mod');

/**
 * @class
 * @constructor
 * @public
 */
class BCML_ModLoader {
	constructor() {
		/**
		 * @type {BCML_Mod[]}
		 */
		this.mods = [];
	}

	/**
	 * 
	 * @param {BCML_Mod} mod 
	 */
	RegisterMod(mod) {
		this.mods.push(mod);
	}

	Init() {
		console.log("Initialising Mods");
		this.mods.forEach(mod=>{
			mod.Init();
		});
	}

	Update() {
		this.mods.forEach(mod=>{
			mod.Update();
		});
	}
}

module.exports = new BCML_ModLoader();
},{"./mod":2}],4:[function(require,module,exports){
//@ts-check
/**
 * Replaces an existing function with a new one,
 * while keeping a reference to the old one
 * @template R
 * @param {Object} obj 
 * @param {Object.<string,(old:(...any)=>R,...any)=>R>} rules 
 */
function replaceFunc(obj,rules) {
	for(let name in rules) {
		let old = obj[name];
		obj[name] =	(...params) => rules[name](old,...params);
	}
}

/**
 * @function Singleton
 * @template T
 * @param {{new():T}} Type
 */
function Singleton(Type) {
	var instance;
	/** @type {{getInstance():T,new():T}} */
	// @ts-ignore
	var SType = Object.assign({},Type);

	function createInstance() {
		var object = new Type();
		return object;
	}

	SType.getInstance = function() {
		if(!instance) {
			instance = createInstance();
		}
		return instance;
	};
	return SType;
}
/**
 * @exports
 * @member replaceFunc
 * @member Singleton
 */
module.exports = {
	replaceFunc,
	Singleton
}
},{}]},{},[1]);
