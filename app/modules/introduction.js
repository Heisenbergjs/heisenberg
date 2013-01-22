
// define introduction, but require some dependencies first

define([
  "jquery",
  "underscore",
  "handlebars",
  "app",
  "text!templates/introduction.hbs"
], function ($, _, Handlebars, app, template) {

  app.Modules.date = {

    // this is your root DOM element for your module, a module doesn't have to be connected to the DOM, but if it is,
    // then it should control one element and everything inside it

    el: '#introduction',

    // this is your init function, this runs when the module is first initialised by the app (app.js)

    init: function () {

      // this underscore.js function allows us to use the keyword 'this' inside the 'render' function and for 'this' to have
      // the context of our 'introduction' module and not whatever called the 'render' function

      _.bindAll(this, 'render');
      this.cacheEls();
      this.bindEvents();

    },

    // bindEvents is where you set up your event listeners and even DOM events, ie. this.$button.click(this.buttonClicked)

    bindEvents: function () {
      app.Events.on('render', this.render);
    },

    // this is where you can cache your templates and your DOM elements, ie. this.$button = $(this.el).find('#myButton'), so
    // jQuery knows to look inside the master 'el' (#jesse) and not traverse the complete DOM tree

    cacheEls: function () {
      this.template = Handlebars.compile(template);
    },

    // this is your render function, this takes data, either from an AJAX call or properties of the modules and displays them
    // in the browser via a template. This render function could be triggered by another module through 'app.Events'

    render: function (event, params) {
      var date = new Date()
        , month = date.getMonth() + 1;

      // here we are setting the root element's HTML to a template populated with dynamic data.

      $(this.el).html(this.template({
        day: date.getDate(),
        month: app.Utilities.Helpers.toCanonicalMonth(month),
        year: date.getFullYear()
      }));
    }
  };

});
