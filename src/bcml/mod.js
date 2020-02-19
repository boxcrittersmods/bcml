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