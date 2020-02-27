function log(logger,type,msg){
	console[type](`[${logger}] [${type}]`,...msg);
}

class BCML_Logger {
	constructor() {
		this.name="none";
	}

	debugger(...msg) {
		log(this.name,"debug",msg);
	}

	info(...msg) {
		log(this.name,"info",msg);
	}

	error(...msg) {
		log(this.name,"error",msg);
	}

	warn(...msg) {
		log(this.name,"warn",msg);
	}
}

class BCML_LogManager {
	getLogger(name) {
		var l = new BCML_Logger();
		l.name = name;
		return l;
	}
}

module.exports = new BCML_LogManager();