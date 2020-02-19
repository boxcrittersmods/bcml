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