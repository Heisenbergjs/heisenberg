# Contributing to Heisenberg.js

Thanks for showing interest in contributing to Heisenberg! This document lists how we do things, the JS style guide to follow. If you have any questions, feel free to:

- Ping us on Twitter (@Jack_Franklin, @benhowdle)
- Grab us on IRC (Freenode #heisenbergjs)
- Open up a Github issue

To contribute a new feature, here's what you should do:

- fork and clone the repository to your machine (first time only)
- run `git flow init`. Leave all settings as default, but __make sure the tag prefix is set to 'v'__.
- create your new feature branch: `git flow feature start X`, where X is the name of your feature
- when you're done, finish the feature: `git flow feature finish X`.
- push your `develop` branch to your clone: `git push origin develop`
- open a pull request, asking to merge from your `develop` branch into the `develop` branch on the Heisenberg repository.
- remember to add yourself to the Contributor list in README.md.
