// configure RequireJS

require.config({
  paths: {
    'jquery': 'components/jquery/jquery',
    'handlebars': 'components/handlebars/handlebars',
    'underscore': 'components/underscore/underscore',
    'text': 'components/requirejs-text/text',
    'app': 'app'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

// start our application by requiring some dependencies

require([
  'jquery',
  'underscore',
  'handlebars',
  'app'
], function( $, _, Handlebars, app ) {

  // as soon as these dependencies have all loaded, RequireJS will run this function

  require([

    // require all the modules needed here

    'utilities/helpers',
    'modules/introduction'

  ], function() {

    // once every module has loaded, we initialise the application as soon as jQuery reports the document as ready

    $( app.init );
  });

});
