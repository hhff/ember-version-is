/*global semver*/
import Ember from 'ember';
import DS from 'ember-data';

var is = function(value, operation, version) {
  if (arguments.length === 2 || Ember.isNone(version)) {
    Ember.assert('range must be a valid semver range', semver.validRange(operation));
    return semver.satisfies(value, operation);
  }

  switch(operation) {
    case 'equalTo':
      return semver.eq(value, version);
    case 'greaterThan':
      return semver.gt(value, version);
    case 'greaterThanOrEqualTo':
      return semver.gte(value, version);
    case 'lessThan':
      return semver.lt(value, version);
    case 'lessThanOrEqualTo':
      return semver.lte(value, version);
    default:
      throw new Error("Ember Version Is: Please pass either 'equalTo', 'lessThan', 'lessThanOrEqualTo', 'greaterThan' or 'greatThanOrEqualTo' as the operation argument.");
  }
};

var emberVersionIs = function(operation, value) {
  return is(Ember.VERSION, operation, value);
};

var emberDataVersionIs = function(operation, value) {
  return is(DS.VERSION, operation, value);
};

export { is, emberVersionIs, emberDataVersionIs };
export default emberVersionIs;
