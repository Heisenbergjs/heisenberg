# Contributing to Heisenberg.js

Thanks for showing interest in contributing to Heisenberg! This document lists how we do things, the JS style guide to follow. If you have any questions, feel free to:

- Ping us on Twitter (@Jack_Franklin, @OliverJAsh, @benhowdle)
- Grab us on IRC (Freenode #heisenbergjs)
- Open up a Github issue

## Style Guide

We use [Idiomatic.js](https://github.com/rwldrn/idiomatic.js/) as our style-guide. Please read and make sure your code matches before making a pull request.

When working with RequireJS, dependencies should be defined on a single line, like so:

```js
define( ["app", "foo"], function( app, foo ) {
});
```

If there's lots of dependencies, push the dependencies and the function onto their own line.

```js
define(
  [ "app", "foo" ],
  function( app, foo ) {
  }
);
```

## Git Flow

Our Git workflow revolves around [Git Flow](https://github.com/nvie/gitflow). To work on Heisenberg you'll need the following installed:

- Git
- Git Flow
- Node.js (V0.8+) and npm (V1.1+)
- [grunt-cli](https://github.com/gruntjs/grunt-cli)

To contribute a new feature, here's what you should do:

- fork and clone the repository to your machine (first time only)
- run `git flow init`. Leave all settings as default, but __make sure the tag prefix is set to 'v'__.
- create your new feature branch: `git flow feature start X`, where X is the name of your feature
- when you're done, finish the feature: `git flow feature finish X`.
- push your `develop` branch to your clone: `git push origin develop`
- open a pull request, asking to merge from your `develop` branch into the `develop` branch on the Heisenberg repository.
