function miniMaxSum(arr) {
  const maxSum = arr
    .sort()
    .slice(1)
    .reduce((acc, current) => acc + current);

  const miniSum = arr
    .sort()
    .slice()
    .reverse()
    .slice(1)
    .reduce((acc, current) => acc + current);

  console.log(miniSum, maxSum);
}

const array = [5, 5, 5, 5, 1];

miniMaxSum(array);
