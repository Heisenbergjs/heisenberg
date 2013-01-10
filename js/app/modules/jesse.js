breakingBad.Modules.jesse = {
	init: function(){
		_.bindAll(this, 'userAdded');
		this.bindEvents();
	},

	bindEvents: function(){
		breakingBad.Events.on('user:added', this.userAdded);
		this.username = $('#username');
	},

	userAdded: function(event, params){
		console.log(params);
		this.username.text(params.username);
		breakingBad.Events.trigger('user:reverseUsername', {username: params.username});
	}
};