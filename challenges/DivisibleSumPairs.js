function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 1; j < ar.length; j++) {
      if (j > i && (ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }

  return counter;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

const result = divisibleSumPairs(n, k, ar);

console.log(result);
