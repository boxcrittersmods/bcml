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