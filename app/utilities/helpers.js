
// define helpers, but require app first

define([
  "app"
], function (app) {

  app.Utilities.Helpers = {

    toCanonicalMonth: function (month) {
      return month < 10 ? "0" + month : month
    }

  };

  // here is your helpers module, completely generic functions separated from the rest of your application logic.
  // call like so: var reversedStr = app.Utilities.Helpers.reverse(str);

  return app;

});
