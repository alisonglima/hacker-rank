function plusMinus(arr) {
  let positiveValues = 0;
  let negativeValues = 0;
  let zeros = 0;

  arr.forEach((el) => {
    if (el > 0) {
      positiveValues++;
    } else if (el < 0) {
      negativeValues++;
    } else {
      zeros++;
    }
  });

  console.log((positiveValues / arr.length).toFixed(6));
  console.log((negativeValues / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

const array = [-4, 3, -9, 0, 4, 1];

plusMinus(array);
