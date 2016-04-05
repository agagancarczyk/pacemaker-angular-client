# pacemakerClient [![Build Status](https://travis-ci.org/agagancarczyk/pacemaker-angular-client.svg?branch=master)](https://travis-ci.org/agagancarczyk/pacemaker-angular-client)



*Generated with [ng-poly](https://github.com/dustinspecker/generator-ng-poly/tree/v0.11.5) version 0.11.5*

College project for Design Patterns and Enterprise Architecture module.

Tools/Technologies/Frameworks:
* Web Application Framework: Angular.js
* Front-end Framework: Bootstrap 3 (HTML5 & CSS3)
* Test Framework: Jasmine
* E2E Tests: Protractor
* Test Runner: Karma
* Task Runner: Gulp
* CI: Travis
* Package Management: Bower (front-end) & npm (back-end)
* Javascript code quality tool: JSHint

## Setup
1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly@0.11.5`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components

## Gulp tasks
- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp webdriverUpdate` to download Selenium server standalone and Chrome driver for e2e testing
- Run `gulp e2eTest` to run e2e tests via Protractor
 - **A localhost must be running** - `gulp dev`
