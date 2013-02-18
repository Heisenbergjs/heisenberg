(function() {
  var App = window.App = {

    // this is our top level module, the module that sets up the namespace and secondary level modules

    Modules: {},

    Utilities: {},

    Events: amplify,

    init: function () {

      // here we are looping round all of the modules in our app.Modules object. We could have an exclude array for modules
      // that we don't want to be immediately initialised. We could initialise them later on in our application lifecycle
      
      for( var x in App.Modules ) {
        App.Modules[x].init();
      }

      // the most useful part of this is Events. Modules shouldn't know about each other, so they're completely decoupled. We use
      // app.Events to 'publish' and 'subscribe' to send/receive messages and data around our application. The 'publish' function
      // takes data as parameters after the topic name. Data parameters are accessible as arguments in the subscribing function.
      // See amplify.js documentation for PubSub.

      App.Events.publish( 'render' );
    }
  };

})();


