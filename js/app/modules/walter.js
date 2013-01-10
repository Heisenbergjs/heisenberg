breakingBad.Modules.walter = {
	init: function(){
		_.bindAll(this, 'reverseUsername');
		this.bindEvents();
		this.addUser();
	},

	bindEvents: function(){
		breakingBad.Events.on('user:reverseUsername', this.reverseUsername);
		this.reverseUsername = $('#reverseUsername');
	},

	addUser: function(){
		breakingBad.Events.trigger('user:added', {username: 'Walter White'});
	},

	reverseUsername: function(event, params){
		this.reverseUsername.text(breakingBad.Utilities.Helpers.reverse(params.username));
	}
};