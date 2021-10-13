const serial = require('./index');
const assert = require('assert');

var obj = {
  food: 'pizza'
};
var obj2 = {
  best: 'food',
  food: 'pizza'
};

assert.deepEqual(obj, serial.dec('{food: "pizza"}'))
assert.deepEqual(obj2, serial.dec('{best: "food", food: "pizza"}'))
