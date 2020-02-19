/**
 * @author TumbleGamer
 * @version 0.1.0
 */
console.log("[BOX CRITTERS MOD LOADER]");
console.log("-----------------------------------");
console.log("Created by the BC Modding Community");
console.log("-----------------------------------");

BCMC_Util.replaceFunc(World.prototype, {
	'login': function init(old, ...params) {
		old(...params);
		BCML_ModLoader.Init();
	}
});
BCMC_Util.replaceFunc(StageContainer.prototype, {
	'constructor': function init(old, ...params) {
		old(...params);
		createjs.Ticker.on("tick", function (t) {
			BCML_ModLoader.Update();
		});
	}
});


/*window = Object.assign(window, {
	BCML_Mod,
	BCML_ModLoader
});*/
window.BCMC_Util = require('./util')
window.BCML_Mod = require('./mod');
window.BCML_ModLoader = require('./modloader');
