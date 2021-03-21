function quickSort(arr) {
  const p = arr[0];
  let left = [],
    right = [],
    equal = [];

  arr.forEach((el) => {
    if (el < p) left.push(el);
    else if (el > p) right.push(el);
    else equal.push(el);
  });

  left.push(...equal, ...right);

  console.log(left);
}

const arr = [4, 5, 3, 7, 2];

quickSort(arr);
