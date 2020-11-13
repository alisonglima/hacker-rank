function hourglasses(array) {
  let generateHourglasses = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      generateHourglasses.push([
        array[i][j],
        array[i][j + 1],
        array[i][j + 2],
        array[i + 1][j + 1],
        array[i + 2][j],
        array[i + 2][j + 1],
        array[i + 2][j + 2],
      ]);
    }
  }

  let aux = 0;
  let result = Math.max();

  generateHourglasses.forEach((line) => {
    line.forEach((column) => {
      aux += column;
    });
    if (aux > result) {
      result = aux;
    }
    aux = 0;
  });

  console.log(result);
}

const array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const array2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

hourglasses(array2);
