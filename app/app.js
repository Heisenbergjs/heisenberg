
// define app, but require jQuery first

define([
  "jquery"
], function ($) {

  var app = {

    // this is our top level module, the module that sets up the namespace and secondary level modules

    Modules: {

    },

    Utilities: {

    },

    Events: $({}),

    init: function () {

      // here we are looping round all of the modules in our app.Modules object. We could have an exclude array for modules
      // that we don't want to be immediately initialised. We could initialise them later on in our application lifecycle

      for (var x in app.Modules) {
        app.Modules[x].init();
      }

      // the most useful part of this is Events. Modules shouldn't know about each other, so they're completely decoupled. We use
      // app.Events to 'trigger' and use 'on' to send/receive messages and data around our application. The 'trigger' function
      // takes data as it's second parameter which is accessible in the 'params' object in the receiving function, i.e. look at the
      // 'render' function within the 'jesse' module

      app.Events.trigger('render');

    }

  };

  return app;

});
