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