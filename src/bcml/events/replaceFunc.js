//@ts-check
/**
 * Replaces an existing function with a new one,
 * while keeping a reference to the old one
 * @template R
 * @param {Object} obj 
 * @param {Object.<string,function(function(...any):R,...any):R>} rules
 */
function replaceFunc(obj,rules) {
	for(let name in rules) {
		var old = obj[name];
		obj[name] = function() {
			return rules[name].call(this,old.bind(this),...arguments);
		}
	}
}

module.exports = replaceFunc;