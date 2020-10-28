function diagonalDifference(arr) {
  let array = arr;
  let arrayReverse = array.map((ar) => ar.slice().reverse());

  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < array.length; i++) {
    leftToRight += array[i][i];
    rightToLeft += arrayReverse[i][i];
  }

  return Math.abs(leftToRight - rightToLeft);
}

const matrix = [
  [11, 2, 4, 5, 4, 4, 4, 6],
  [4, 5, 6, 10, 8, -12, 7, 1],
  [10, 8, -12, 11, 2, 4, 5, 0],
  [8, -12, 7, 1, 11, 2, 4, 5],
  [4, 4, 4, 6, 1, 1, 1, 1],
  [10, 8, -12, 11, 7, 2, 3, 6],
  [7, 2, 3, 6, 4, 5, 6, 10],
  [1, 1, 1, 1, 8, -12, 7, 1],
];

console.log(diagonalDifference(matrix));
