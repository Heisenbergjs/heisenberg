app.Modules.myOtherModule = {
	init: function(){
		_.bindAll(this, 'reverseUsername');
		this.bindEvents();
		this.addUser();
	},

	bindEvents: function(){
		app.Events.on('user:reverseUsername', this.reverseUsername);
		this.reverseUsername = $('#reverseUsername');
	},

	addUser: function(){
		app.Events.trigger('user:added', {username: 'Walter White'});
	},

	reverseUsername: function(event, params){
		this.reverseUsername.text(app.Utilities.Helpers.reverse(params.username));
	}
};