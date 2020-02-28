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