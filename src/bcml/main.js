/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");


const BCML_Util = require('./util')
const BCML_Mod = require('./mod');
const BCML_ModLoader = require('./modloader');

BCML_Util.replaceFunc(World.prototype, {
	'login': function(old, ...params) {
		old(...params);
		BCML_ModLoader.Init();
	}
});
BCML_Util.replaceFunc(StageContainer.prototype, {
	'update': function (old, ...params) {
			old(...params);
			BCML_ModLoader.Update();
	}
});


window = Object.assign(window, {
	BCML_Mod,
	BCML_ModLoader
});
