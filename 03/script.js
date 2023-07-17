// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//1)
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps2 = [5, -3, -1, -8, 'error', 20, 16, 24, 28, 30, 12, 6];

const getAmplitude = function (temperatures1, temperatures2) {
  let tempsArray = temperatures1.concat(temperatures2);
  let max = tempsArray[0];
  let min = tempsArray[0];
  for (let i = 0; i < tempsArray.length; i++) {
    const curTemp = tempsArray[i];
    if (max < curTemp) {
      max = curTemp;
    } else if (min > curTemp) {
      min = curTemp;
    } else if (typeof curTemp !== 'number') {
      continue;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = getAmplitude(temps, temps2);
console.log(amplitude);
