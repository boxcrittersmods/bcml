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
	 * @method
	 * @param {BCML_Mod} mod 
	 */
	RegisterMod(mod) {
		this.mods.push(mod);
	}

	/**
	 * @method
	 */
	Init() {
		console.log("Initialising Mods");
		this.mods.forEach(mod=>{
			mod.Init();
		});
	}

	/**
	 * @method
	 */
	Update() {
		this.mods.forEach(mod=>{
			mod.Update();
		});
	}
}

module.exports = new BCML_ModLoader();