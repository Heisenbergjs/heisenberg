window.breakingBad = {

	// this is our top level module, the module that sets up the namespace and secondary level modules

	Modules: {

	},
	Utilities: {
		
	},
	init: function(){
		console.log('Ready, yo!');

		// here we are looping round all of the modules in our breakingBad.Modules object. We could have an exclude array for modules
		// that we don't want to be immediately initialised. We could initialise them later on in our application lifecycle

		for(var x in breakingBad.Modules){
			breakingBad.Modules[x].init();
		}

		// the most useful part of this is Events. Modules shouldn't know about each other, so they're completely decoupled. We use
		// breakingBad.Events to 'trigger' and use 'on' to send/receive messages and data around our application. The 'trigger' function
		// takes data as it's second parameter which is accessible in the 'params' object in the receiving function, ie. look at the
		// 'render' function within the 'jesse' module

		breakingBad.Events.trigger('render', {quote: 'Robots, yo!'});

	},
	Events: $({})
};

$(document).ready(function(){

	// here we use the jQuery Document Ready function before we initialise our application

	breakingBad.init();

});