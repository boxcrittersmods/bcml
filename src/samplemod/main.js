/*function start() {
	socket.on("M", () => {
		console.log(Object.keys(world.room.players).length + " Players are online");
	});
}
{
	let w = World.prototype.login;
	World.prototype.login = (t) => {
		w(t)
		start();
	};
}*/

console.log("Hello I am a sample mod");
class SampleMod extends BCML_Mod {

	Init() {
		console.log("Sample Mod Initialised");
	}

	Update() {
		console.log("Sample Mod Update");
	}
}

BCML_ModLoader.RegisterMod(new SampleMod());