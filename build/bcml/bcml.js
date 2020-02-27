(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Mod = require('./common/mod');
const BCML_ModLoader = require('./common/modLoader');
const BCML_LogManager = require('./common/logger')

class BCMLMod extends Mod {
	constructor() {
		super(require('./modinfo'));
		this.LOGGER=BCML_LogManager.getLogger(this.id);
		this.LOGGER.info("Hello i am a mod");
	}
}

BCML_ModLoader.registerMod(new BCMLMod());
},{"./common/logger":2,"./common/mod":3,"./common/modLoader":4,"./modinfo":6}],2:[function(require,module,exports){
function log(logger,type,msg){
	console[type](`[${logger}][${type}]`,...msg);
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
class Mod {
	constructor(modinfo) {
		this.id = modinfo.id;
		this.info = modinfo;
	}
}

module.exports = Mod;
},{}],4:[function(require,module,exports){
const BCML_LogManager = require('./logger');
const Mod = require('./mod');

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
	}
}

module.exports = new BCML_ModLoader();
},{"../../bcp/modinfo":7,"./logger":2,"./mod":3}],5:[function(require,module,exports){
/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");

const BCML_LogManager = require('./common/logger');
const BCML_ModLoader = require('./common/modLoader');

require('./bcmlMod');


window = Object.assign(window,{
	BCML_LogManager,
	BCML_ModLoader
});

},{"./bcmlMod":1,"./common/logger":2,"./common/modLoader":4}],6:[function(require,module,exports){
module.exports = {
	id:"bcml",
	name:"bcml",
	version:"0.1",
	main:"main.js",
}
},{}],7:[function(require,module,exports){
module.exports = {
	id:"boxcritters",
	name:"bcp",
	label:"Box Critters Coder Pack",
	version:"0.1",
	main:"bcp.js",
	onefile:true
}
},{}]},{},[5]);
