var vows = require('vows');
var assert = require('assert');
var getClosestValue = require('../index').getClosestValue;

var ArrayOfValues = [
  {w: 120, h: 152},
  {w: 120, h: 152},
  {w: 320, h: 520},
  {w: 10,  h: 180},
  {w: 560, h: 2}
];

var ArrayOfValuesColors = [
  {w: 120, h: 152, r: 20,  g: 230, b: 150},
  {w: 120, h: 152, r: 255, g: 123, b: 60 },
  {w: 320, h: 520, r: 29,  g: 10,  b: 0  },
  {w: 320, h: 520, r: 255, g: 100, b: 255},
  {w: 150, h: 140, r: 255, g: 0,   b: 255},
  {w: 10,  h: 180, r: 100, g: 124, b: 124},
  {w: 560, h: 2,   r: 56,  g: 234, b: 10 }
];

var criterionObjectForSize = {w: 142, h: 138};
var criterionObjectForSizeAndColor = {w: 142, h: 138, r: 99,  g: 255, b: 80};

vows.describe('Test of Chooser').addBatch({
  'function getClosestValue': {
    topic: function getFunc() { return getClosestValue },

    'type should be function': function (MinMaxValue) {
      assert.isFunction(MinMaxValue, 'getClosestValue is not a function');
    },

    'choose the right size for two parameters': function (MinMaxValue) {
      var result = MinMaxValue(criterionObjectForSize, ArrayOfValues);

      assert.deepEqual(result.value, {w: 120, h: 152}, 'non find minimum value');
      assert.deepEqual(result.oppositeValue, {w: 560, h: 2}, 'non find maximum value');
    },

    'choose rectangle by size and color': function (MinMaxValue) {
      var result = MinMaxValue(criterionObjectForSizeAndColor, ArrayOfValuesColors);

      assert.deepEqual(result.value, {w: 120, h: 152, r: 20,  g: 230, b: 150}, 'non find minimum value');
      assert.deepEqual(result.oppositeValue, {w: 320, h: 520, r: 255, g: 100, b: 255}, 'non find maximum value');
    }
  }
}).export(module);