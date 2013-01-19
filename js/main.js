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
    var date = new Date();
    var month = date.getMonth() + 1;
    $("#introduction").html(temp({
      day: date.getDate(),
      month: month < 10 ? "0" + month : month,
      year: date.getFullYear()
    }));
  });

});


