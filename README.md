# Ember Version Is

[![Build Status](https://travis-ci.org/hhff/ember-version-is.svg)](https://travis-ci.org/hhff/ember-version-is)
[![npm version](https://badge.fury.io/js/ember-version-is.svg)](http://badge.fury.io/js/ember-version-is)

A super simple set of helpers designed to give Ember Addon developers a clean way of supporting multiple
Ember & Ember Data versions.

It's basically a thin wrapper on Semver.

## Installation

```bash
# In your Addon...
npm install ember-version-is --save
```

Then in your Addon's `index.js`:

```js
/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-infinity',

  /* Necessary Hack until Ember CLI supports nested addons. */
  included: function(app) {
    this.addons.forEach(function(addon){
      if (addon.name === "ember-version-is") {
        addon.included.apply(addon, [app]);
      }
    });
  }
};
```

## Usage

Then anywhere in your codebase, you can do:

```js
import Ember from 'ember';
import emberVersionIs from 'ember-version-is';
import { emberDataVersionIs } from 'ember-version-is';

export default Ember.Route.extend({
  model() {
    let promise;
    if (emberDataVersionIs('lessThanOrEqualTo', "1.13.0")) {
      promise = this.store.find('product', 1); 
    } else {
      promise = this.store.query('product', 1);
    }
    return promise.then(response => {
      if (emberVersionIs('equalTo', "2.0.0")) {
        Ember.warn("You are using Ember 2.0.  That is rad.");
      }
    });
  }
});
```

If you'd like to check arbitary versions of things, you can do that too:

```js
import Ember from 'ember';
import { is } from 'ember-version-is';
const VERSION = '0.2.3';

export default Ember.Route.extend({
  activate() {
    if (is(VERSION, 'lessThanOrEqualTo', '0.2.5')) {
      this.set('techno', 'is making a comeback');
    }
  }
});
```

[SemVer ranges](https://github.com/npm/node-semver#ranges) are supported as
well (works for `is`, `emberVersionIs` and `emberDataVersionIs`):

```js
import Ember from 'ember';
import { is } from 'ember-version-is';
const VERSION = '0.2.8';

export default Ember.Route.extend({
  activate() {
    if (is(VERSION, '<= 0.2.5 || 0.2.8')) {
      this.set('techno', 'is making a comeback');
    }
  }
});
```
