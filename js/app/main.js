window.app = {
	Modules: {

	},
	Utilities: {
		
	},
	init: function(){
		console.log('App ready!');
		for(var x in app.Modules){
			app.Modules[x].init();
		}
	},
	Events: $({})
};

$(document).ready(function(){
	app.init();
});