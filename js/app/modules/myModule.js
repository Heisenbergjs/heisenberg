app.Modules.myModule = {
	init: function(){
		_.bindAll(this, 'userAdded');
		this.bindEvents();
	},

	bindEvents: function(){
		app.Events.on('user:added', this.userAdded);
		this.username = $('#username');
	},

	userAdded: function(event, params){
		console.log(params);
		this.username.text(params.username);
		app.Events.trigger('user:reverseUsername', {username: params.username});
	}
};