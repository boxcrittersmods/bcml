(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class BCMLMod extends Mod {
	constructor() {
		super(this,require('../modinfo'));
		this.LOGGER = BCML_LogManager.getLogger(this.id);
		this.getEventBus().addListener(this.start);
	}

	start() {
		this.LOGGER.info("Mod Started");
	}
}

BCML_ModLoader.registerMod(new BCMLMod());
},{"../modinfo":9}],2:[function(require,module,exports){
function log(logger,type,msg){
	console[type](`[${logger}] [${type}]`,...msg);
}

class BCML_Logger {
	constructor() {
		this.name="none";
	}

	debugger(...msg) {
		log(this.name,"debug",msg);
	}

	info(...msg) {
		log(this.name,"info",msg);
	}

	error(...msg) {
		log(this.name,"error",msg);
	}

	warn(...msg) {
		log(this.name,"warn",msg);
	}
}

class BCML_LogManager {
	getLogger(name) {
		var l = new BCML_Logger();
		l.name = name;
		return l;
	}
}

module.exports = new BCML_LogManager();
},{}],3:[function(require,module,exports){
const EventBus = require('../events/eventBus')

class Mod {
	constructor(mod,modinfo) {
		this.id = modinfo.id;
		this.info = modinfo;
		this.eventBus = new BCML_EventBus(this.child);
	}
}

module.exports = Mod;
},{"../events/eventBus":5}],4:[function(require,module,exports){
const BCML_LogManager = require('./logger');
const Mod = require('./mod');
const EventManager = require('../events/eventManager');

class BCPMod extends Mod {
	constructor() {
		super(require('../../bcp/modinfo'));
		this.LOGGER=BCML_LogManager.getLogger(this.id);
	}
}

class BCML_ModLoader {
	constructor() {
		this.LOGGER = BCML_LogManager.getLogger("ModLoader");
		this.LOGGER.info("Testing Logger");
		this.mods = [];

		this.registerMod(new BCPMod());
	}

	registerMod(mod) {
		this.mods.push(mod);
		EventManager.registerBus(mod.eventBus);
	}
}

module.exports = new BCML_ModLoader();
},{"../../bcp/modinfo":10,"../events/eventManager":6,"./logger":2,"./mod":3}],5:[function(require,module,exports){
class EventBus {
	constructor(target) {
		this.listeners = {};
		this.target = target;
	}

	addListener(cb) {
		this.listeners[name] = target[name].bind(target);
	}

	call(name,params){
		if(this.listeners[name]){
			this.listeners[name](...params)
		}
	}
}

module.exports = BCML_EventBus;
},{}],6:[function(require,module,exports){
const ReplaceFunction = require('./replaceFunc');

class EventFactory {
	constructor() {
		this.buses = [];

		ReplaceFunction(World.prototype,{
			'handleLogin':function(old,...params) {
				old(...params);
				EventFactory.call('start',...params)
			}
		});
	}

	registerBus(bus) {
		this.buses.push(bus);
	}

	call(event,params) {
		this.buses.forEach(b=>b.call(event)(params));
	}
}

module.exports = new EventFactory();
},{"./replaceFunc":7}],7:[function(require,module,exports){
//@ts-check
/**
 * Replaces an existing function with a new one,
 * while keeping a reference to the old one
 * @template R
 * @param {Object} obj 
 * @param {Object.<string,function(function(...any):R,...any):R>} rules
 */
function replaceFunc(obj,rules) {
	for(let name in rules) {
		var old = obj[name];
		obj[name] = function() {
			return rules[name].call(this,old.bind(this),...arguments);
		}
	}
}

module.exports = replaceFunc;
},{}],8:[function(require,module,exports){
/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");

const BCML_LogManager = require('./core/logger');
const BCML_ModLoader = require('./core/modLoader');


window = Object.assign(window,{
	BCML_LogManager,
	BCML_ModLoader
});


require('./common/bcmlMod');
},{"./common/bcmlMod":1,"./core/logger":2,"./core/modLoader":4}],9:[function(require,module,exports){
module.exports = {
	id:"bcml",
	name:"bcml",
	version:"0.1",
	main:"main.js",
}
},{}],10:[function(require,module,exports){
module.exports = {
	id:"boxcritters",
	name:"bcp",
	label:"Box Critters Coder Pack",
	version:"0.1",
	main:"bcp.js",
	onefile:true
}
},{}]},{},[8]);
