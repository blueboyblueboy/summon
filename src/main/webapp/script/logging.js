var Logging = {
	setup: function(){
		if(!window.console){
			window.console = { log: function(){} };
		}
		if(!window.console.error){
			window.console.error = function(msg){console.log(msg)};
		}
		if(!window.console.warn){
			window.console.warn = function(msg){console.log(msg)};
		}
		if(!window.console.info){
			window.console.info = function(msg){console.log(msg)};
		}
		if(!window.console.debug){
			window.console.debug = function(msg){console.log(msg)};
		}
		if(!window.console.groupCollapsed){
			window.console.groupCollapsed = function(group){console.log("groupCollapsed-"+group)};
		}
		if(!window.console.groupEnd){
			window.console.groupEnd = function(){console.log("groupEnd")};
		}
		if(!window.console.dir){
			window.console.dir = function(msg){console.log(obj)};
		}
	}
}

// Init Singleton
Logging.setup();
