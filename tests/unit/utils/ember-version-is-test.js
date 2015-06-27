import emberVersionIs from 'ember-version-is';
import { is, emberDataVersionIs } from 'ember-version-is';
import { module, test } from 'qunit';

module('Unit | Utility | Ember Version Is');

test('equalTo works', function(assert) {
  var result = is('1.13.0', 'equalTo', '1.13.0');
  assert.ok(result);
  
  result = is('1.12.0', 'equalTo', '1.13.0');
  assert.ok(!result);

  result = is('1.13.1', 'equalTo', '1.13.0');
  assert.ok(!result);
});

test('lessThan works', function(assert) {
  var result = is('1.13.0', 'lessThan', '1.13.0');
  assert.ok(!result);
  
  result = is('1.12.0', 'lessThan', '1.13.0');
  assert.ok(result);

  result = is('1.13.1', 'lessThan', '1.13.0');
  assert.ok(!result);
});

test('lessThanOrEqualTo works', function(assert) {
  var result = is('1.13.0', 'lessThanOrEqualTo', '1.13.0');
  assert.ok(result);
  
  result = is('1.12.0', 'lessThanOrEqualTo', '1.13.0');
  assert.ok(result);

  result = is('1.13.1', 'lessThanOrEqualTo', '1.13.0');
  assert.ok(!result);
});

test('greaterThan works', function(assert) {
  var result = is('1.13.0', 'greaterThan', '1.13.0');
  assert.ok(!result);
  
  result = is('1.12.0', 'greaterThan', '1.13.0');
  assert.ok(!result);

  result = is('1.13.1', 'greaterThan', '1.13.0');
  assert.ok(result);
});

test('greaterThanOrEqualTo works', function(assert) {
  var result = is('1.13.0', 'greaterThanOrEqualTo', '1.13.0');
  assert.ok(result);
  
  result = is('1.12.0', 'greaterThanOrEqualTo', '1.13.0');
  assert.ok(!result);

  result = is('1.13.1', 'greaterThanOrEqualTo', '1.13.0');
  assert.ok(result);
});


test('emberVersionIs works', function(assert) {
  var result = emberVersionIs('greaterThan', '1.8.0');
  assert.ok(result);
  
  result = emberVersionIs('lessThan', '3.8.0');
  assert.ok(result);
});

test('emberDataVersionIs works', function(assert) {
  var result = emberDataVersionIs('greaterThan', '0.0.9');
  assert.ok(result);
  
  result = emberDataVersionIs('lessThan', '3.8.0');
  assert.ok(result);
});

