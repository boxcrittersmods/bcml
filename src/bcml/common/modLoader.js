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