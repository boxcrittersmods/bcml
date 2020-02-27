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