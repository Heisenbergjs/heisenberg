require.config({
  paths: {
    'underscore': 'vendors/underscore/underscore',
    'jquery': 'vendors/jquery/jquery.min',
    'handlebars': 'vendors/handlebars/handlebars'
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

/*
 * if everything in your app will depend on something
 * put everything else within the require
 * requires can be nested
 */
require(["jquery"], function($) {

  require(["modules/add"], function(add) {
    console.log(add.twoNumbers(2, 2));
  });

  require(["handlebars"], function(Handlebars) {
    var temp = Handlebars.compile($("#introduction-template").html());
    $("#introduction").html(temp({ date: Date.now() }));
  });

});


