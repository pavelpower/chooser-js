'use strict';

/**
 * Choose the closest value or the most distant
 * @param criterionObject {Object} - criterion plain Object
 * @param ArrayOfValues {Array<Object>} - array of objects similar of "criterionObject"
 * @returns {{min: {Object}, max: {Object}}}
 */
function MinMaxValue (criterionObject, ArrayOfValues) {
  var paramsNames = Object.keys(criterionObject);
  var minR = Infinity;
  var maxR = 0;
  var minValue = null;
  var maxValue = 0;

  ArrayOfValues.forEach(function (elem) {
    var R = 0;
    paramsNames.forEach(function (paramName) {
      var paramDiff = elem[paramName] - criterionObject[paramName];
      R += paramDiff * paramDiff;
    });

    if (R <= minR) {
      minValue = elem;
      minR = R;
    }

    if (maxR <= R) {
      maxValue = elem;
      maxR = R;
    }
  });

  return {
    min: minValue,
    max: maxValue
  }
}

module.exports = {
  MinMaxValue: MinMaxValue
};