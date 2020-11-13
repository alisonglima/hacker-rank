function formingMagicSquare(input) {
  var myArr = [].concat.apply([], input);

  console.log(myArr);

  var squares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  var cost = Math.min();

  for (let i = 0; i < squares.length; i++) {
    let currCost = 0;
    for (j = 0; j < 9; j++) {
      currCost += Math.abs(squares[i][j] - myArr[j]);
    }
    if (currCost < cost) {
      cost = currCost;
    }
  }
  return cost;
}

const array1 = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

const array2 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

const array3 = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

const array4 = [
  [4, 5, 8],
  [2, 4, 1],
  [1, 9, 7],
];

const array5 = [
  [2, 9, 8],
  [4, 2, 7],
  [5, 6, 7],
];

const result = formingMagicSquare(array2);

console.log(result);
