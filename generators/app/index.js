'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.green('generator-testable-js') + ' generator!'
    ));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );
    this.fs.copy(
      this.templatePath('test.js'),
      this.destinationPath('test.js')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
    this.log("Now running 'npm tests' to run your tests...");
    this.spawnCommand("npm", ["test"]);
  }
});
