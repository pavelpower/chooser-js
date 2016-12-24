# chooser-js

The program helps to pick up the item at the specified criteria

# How it work?

We used different between [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)
for each object

![How it work](./img/howItWork_find_closest_value.png)

```
R^2(¡) = ∑(X¡ - Xı)ˆ2; i < length;

value = min(R[]);
```

# Doc

```
/**
 * Choose the closest value or the most distant
 * @param criterionObject {Object} - criterion plain Object
 * @param ArrayOfValues {Array<Object>} - array of objects similar of "criterionObject"
 * @returns {{value: {Object}, oppositeValue: {Object}}}
 */
var result = getClosestValue (criterionObject, ArrayOfValues);

result.value // the closest value
result.oppositeValue // the opposite value
```

# For example

## Choose the most suitable size

We need to choose the most suitable size image

We have a set of image sizes from which to choose

```
const ArrayOfValues = [
  {w: 120, h: 152},
  {w: 120, h: 152},
  {w: 320, h: 520},
  {w: 10,  h: 180},
  {w: 560, h: 2}
];
```

We need to choose from a set of sizes the closest to the size specified rectangle

```
const crtSize = {w: 142, h: 138};
```

When we do next:

```
const getClosestValue = require('chooser-js').getClosestValue;
 
const result = getClosestValue(crtSize, ArrayOfValues).value;

const img = '<img ' +
  'width="' + crtSize.w + '" ' +
  'height="' + crtSize.h + '"' +
  'src="cdn.server.com/upload/avatar/' + result.w + 'x' + result.h + '" alt="good image"/>';
```

## Choose the most suitable image by size and color
   
Imagine that we have to choose the color of 
the image close to the overall design of the page.

And this color it is ["magenta"](https://en.wikipedia.org/wiki/Purple)

|  Name |  Sheme       |  Value           | 
|-------|--------------|------------------|
| sRGBB | (r, g, b)    | (128, 0, 128)    |
| CMYKH | (c, m, y, k) | (50, 100, 0, 0)  |
| HSV   | (h, s, v)    | (300°, 100%, 50%)|


Then we can make the criteria object:

```
const crtSize = {
  w: 150, h: 150,
  r: 128, g: 0, b: 128
};
```

And chose image form 

```
var ArrayOfValuesColors = [
  {w: 120, h: 152, r: 20,  g: 230, b: 150},
  {w: 120, h: 152, r: 255, g: 123, b: 60 },
  {w: 320, h: 520, r: 29,  g: 10,  b: 0  },
  {w: 320, h: 520, r: 255, g: 100, b: 255},
  {w: 150, h: 140, r: 255, g: 0,   b: 255},
  {w: 146, h: 154, r: 130, g: 5,   b: 124},
  {w: 10,  h: 180, r: 100, g: 124, b: 124},
  {w: 560, h: 2,   r: 56,  g: 234, b: 10 }
];

const getClosestValue = require('chooser-js').getClosestValue;
 
const result = getClosestValue(crtSize, ArrayOfValuesColors).value;

const img = '<img ' +
  'width="' + crtSize.w + '" ' +
  'height="' + crtSize.h + '"' +
  'src="cdn.server.com/upload/avatar/' + result.w + 'x' + result.h + '" alt="magenta Avatar"/>';

```