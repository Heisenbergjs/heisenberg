breakingBad.Modules.walter = {

	// see jesse.js for full comments on each function/section

	el: '#walter',

	name: 'Walter',

	avatar: 'img/walter.png',

	init: function(){
		_.bindAll(this, 'render');
		this.cacheEls();
		this.bindEvents();
	},

	bindEvents: function(){
		breakingBad.Events.on('render', this.render);
	},

	cacheEls: function(){
		this.template = Handlebars.compile( $('#character-template').html() );
	},

	render: function(event, params){
		console.log(params);
		var data = {
			character: this.name,
			avatar: this.avatar
		};
		$(this.el).html(this.template( data ) );
	}
};