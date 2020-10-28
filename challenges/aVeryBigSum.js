function aVeryBigSum(ar) {
  const sum = ar.reduce((acc, current) => acc + current);

  return sum;
}

const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(array));
