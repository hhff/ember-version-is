/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-version-is',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/semver.browser.js');
  }
};
