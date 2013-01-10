breakingBad.Modules.jesse = {

	// this is your root DOM element for your module, a module doesn't have to be connected to the DOM, but if it is,
	// then it should control one element and everything inside it

	el: '#jesse',


	// name and avatar are both properties of this module, they can be edited at any time

	name: 'Jesse',

	avatar: 'img/jesse.png',

	
	// this is your init function, this runs when the module is first initialised by your main module (main.js)

	init: function(){

		// this underscore.js function allows us to use the keyword 'this' inside the 'render' function and for 'this' to have
		// the context of our 'jesse' module and not whatever called the 'render' function

		_.bindAll(this, 'render');

		this.cacheEls();
		this.bindEvents();
	},


	// bindEvents is where you set up your event listeners and even DOM events, ie. this.$button.click(this.buttonClicked)

	bindEvents: function(){
		breakingBad.Events.on('render', this.render);
	},


	// this is where you can cache your templates and your DOM elements, ie. this.$button = $(this.el).find('#myButton'), so
	// jQuery knows to look inside the master 'el' (#jesse) and not traverse the complete DOM tree

	cacheEls: function(){
		this.template = Handlebars.compile( $('#character-template').html() );
	},


	// this is your render function, this takes data, either from an AJAX call or properties of the modules and displays them
	// in the browser via a template. This render function could be triggered by another module through 'breakingBad.Events'

	render: function(event, params){
		console.log(params);
		var data = {
			character: this.name,
			avatar: this.avatar
		};

		// here we are setting the root element's HTML to a template populated with dynamic data. The object keys map to the template
		// in the <script> in the index.html, ie. <img class="avatar" src="{{avatar}}" />

		$(this.el).html(this.template( data ) );
	}
};