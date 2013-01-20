require.config({
  paths: {
    'underscore': '../lib/underscore/underscore',
    'jquery': '../lib/jquery/jquery.min',
    'handlebars': '../lib/handlebars/handlebars',
    'text': '../lib/requirejs-text/text'
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
 **/
require(["jquery"], function($) {

  require(["modules/add"], function(add) {
    console.log(add.twoNumbers(2, 2));
  });

  require(["handlebars", "text!templates/date.hbs"], function(Handlebars, template) {
    var temp = Handlebars.compile(template);
    var date = new Date();
    var month = date.getMonth() + 1;
    $("#introduction").html(temp({
      day: date.getDate(),
      month: month < 10 ? "0" + month : month,
      year: date.getFullYear()
    }));
  });

});

