function quickSort(arr) {
  const p = arr[0];
  let left = [],
    right = [],
    equal = [],
    result = [];

  arr.forEach((num) => {
    if (num < p) left.push(num);
    else if (num > p) right.push(num);
    else equal.push(num);
  });

  if (left.length > 1) left = quickSort(left);

  if (right.length > 1) right = quickSort(right);

  result.push(...left, ...equal, ...right);

  console.log(result.join(" "));

  return result;
}

function processData(input) {
  const arr = input
    .replace("\n", " ")
    .split(" ")
    .map((el) => {
      let n = Number(el);
      return n;
    });

  arr.shift();

  quickSort(arr);
}

const input = "9\n9 8 6 7 3 5 4 1 2";

processData(input);
