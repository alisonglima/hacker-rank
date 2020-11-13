function verifyDiff(num1, num2) {
  return Math.abs(num1 - num2) <= 1;
}

function pickingNumbers(input) {
  const array = input.sort((a, b) => a - b);

  let getSubArrays = [];
  let aux = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (verifyDiff(array[i], array[j])) {
        aux.push(array[j]);
        if (j + 1 === array.length) {
          getSubArrays.push(aux);
          aux = [];
          break;
        }
      } else {
        if (!getSubArrays.toString().includes(aux) && aux.length >= 2) {
          getSubArrays.push(aux);
        }
        aux = [];
        break;
      }
    }
  }

  let counter = 0;

  const biggerSubArray = getSubArrays.filter((el) => {
    for (let i = 0; i < el.length; i++) {
      counter = 0;

      for (let j = 0; j < el.length; j++) {
        if (!verifyDiff(el[i], el[j])) {
          counter++;
          break;
        }
      }
      if (counter > 0) break;
    }
    if (counter > 0) {
      return false;
    } else {
      return true;
    }
  });

  const result = biggerSubArray.reduce((a, b) => {
    return a >= b.length ? a : b.length;
  }, 0);

  return result;
}

const array1 = [1, 1, 2, 2, 4, 4, 5, 5, 5];
const array2 = [4, 6, 5, 3, 3, 1];
const array3 = [1, 2, 2, 3, 1, 2];
const array4 = [
  84,
  43,
  11,
  41,
  2,
  99,
  31,
  32,
  56,
  53,
  42,
  14,
  98,
  27,
  64,
  57,
  16,
  33,
  48,
  21,
  46,
  61,
  87,
  90,
  28,
  12,
  62,
  49,
  29,
  77,
  82,
  70,
  80,
  89,
  95,
  52,
  13,
  19,
  9,
  79,
  35,
  67,
  51,
  39,
  7,
  1,
  66,
  8,
  17,
  85,
  71,
  97,
  34,
  73,
  75,
  6,
  91,
  40,
  96,
  65,
  37,
  74,
  20,
  68,
  23,
  47,
  76,
  55,
  24,
  3,
  30,
  22,
  55,
  5,
  69,
  86,
  54,
  50,
  10,
  59,
  15,
  4,
  36,
  38,
  83,
  60,
  72,
  63,
  78,
  58,
  88,
  93,
  45,
  18,
  94,
  44,
  92,
  81,
  25,
  26,
];

const array5 = [
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
  66,
];

const result = pickingNumbers(array4);

console.log(result);
