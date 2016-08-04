# Angular Example

## Overview

This is a simple **AngularJS Example** to understand the basics of *AngularJS*.

## Dependencies

### Runtime dependencies

The following libraries are used in the application.

*[AngularJS](https://angularjs.org/)*: *AngularJS* is an open-source web application framework to address many of the challenges encountered in developing *Single Page Applications*.

*[jQuery](https://jquery.com/)*: *jQuery* is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

*[RequireJS](http://requirejs.org/)*: *RequireJS* is a JavaScript file and module loader.

*[Bootstrap](http://getbootstrap.com/)*: HTML, CSS and JS framework for developing responsive, mobile first projects on the web.

### Dev dependencies

The following libraries are used for the development of this project.

*[npm](https://www.npmjs.com/)*: Package manager.

*[grunt](http://gruntjs.com/)*: JavaScript task runner.

*[bower](http://bower.io/)*: Package manager.

*[karma](http://karma-runner.github.io)*: Test runner for JavaScript.

*[Protractor](https://angular.github.io/protractor/#/)*: Protractor is an end-to-end test framework for AngularJS applications.

## How to...

### Setup

`npm install`

### Start

You can start the app with one of the following commands.

```
grunt
```

**OR**

```
grunt dev
```

### Test

Run unit tests.

`grunt unit`

Run end-2-end tests on local working environment.

`grunt e2e`

## Common pitfalls

Here are some pitfalls I encountered during development.

### Missing selenium-webdriver

**Issue**:

```
Error: No selenium server jar found at the specified location (learnerbot.github.io.git\node_modules\protractor\selenium\selenium-server-standalone-2.45.0.jar). Check that the version number is up to date.
    at LocalDriverProvider.addDefaultBinaryLocs_ (learnerbot.github.io.git\node_modules\protractor\lib\driverProviders\local.js:37:11)
    at LocalDriverProvider.setupEnv (learnerbot.github.io.git\node_modules\protractor\lib\driverProviders\local.js:71:8)
    at Runner.run (learnerbot.github.io.git\node_modules\protractor\lib\runner.js:254:31)
    at TaskRunner.run (learnerbot.github.io.git\node_modules\protractor\lib\taskRunner.js:123:19)
    at createNextTaskRunner (learnerbot.github.io.git\node_modules\protractor\lib\launcher.js:220:20)
    at learnerbot.github.io.git\node_modules\protractor\lib\launcher.js:243:7
    at _fulfilled (learnerbot.github.io.git\node_modules\protractor\node_modules\q\q.js:797:54)
    at self.promiseDispatch.done (learnerbot.github.io.git\node_modules\protractor\node_modules\q\q.js:826:30)
    at Promise.promise.promiseDispatch (learnerbot.github.io.git\node_modules\protractor\node_modules\q\q.js:759:13)
    at learnerbot.github.io.git\node_modules\protractor\node_modules\q\q.js:573:44
```

**Solution**:

Run the following command in terminal in the project root folder.

```
./node_modules/protractor/bin/webdriver-manager update
```
