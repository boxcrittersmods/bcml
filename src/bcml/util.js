//@ts-check
/**
 * Replaces an existing function with a new one,
 * while keeping a reference to the old one
 * @template R
 * @param {Object} obj 
 * @param {Object.<string,(old:(...any)=>R,...any)=>R>} rules 
 */
function replaceFunc(obj,rules) {
	for(let name in rules) {
		let old = obj[name];
		obj[name] =	(...params) => rules[name](old,...params);
	}
}

/**
 * @function Singleton
 * @template T
 * @param {{new():T}} Type
 */
function Singleton(Type) {
	var instance;
	/** @type {{getInstance():T,new():T}} */
	// @ts-ignore
	var SType = Object.assign({},Type);

	function createInstance() {
		var object = new Type();
		return object;
	}

	SType.getInstance = function() {
		if(!instance) {
			instance = createInstance();
		}
		return instance;
	};
	return SType;
}
/**
 * @exports
 * @member replaceFunc
 * @member Singleton
 */
module.exports = {
	replaceFunc,
	Singleton
}