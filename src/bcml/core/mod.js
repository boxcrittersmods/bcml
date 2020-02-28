const EventBus = require('../events/eventBus')

class Mod {
	constructor(mod,modinfo) {
		this.id = modinfo.id;
		this.info = modinfo;
		this.eventBus = new BCML_EventBus(this.child);
	}
}

module.exports = Mod;