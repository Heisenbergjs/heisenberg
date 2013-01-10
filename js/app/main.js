window.breakingBad = {
	Modules: {

	},
	Utilities: {
		
	},
	init: function(){
		console.log('Ready, yo!');
		for(var x in breakingBad.Modules){
			breakingBad.Modules[x].init();
		}
	},
	Events: $({})
};

$(document).ready(function(){
	breakingBad.init();
});