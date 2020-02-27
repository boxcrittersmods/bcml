/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");

const BCML_LogManager = require('./common/logger');
const BCML_ModLoader = require('./common/modLoader');

require('./bcmlMod');


window = Object.assign(window,{
	BCML_LogManager,
	BCML_ModLoader
});
