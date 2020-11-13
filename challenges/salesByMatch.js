function sockMerchant(n, ar) {
  const joinTheSocks = ar
    .map((sock) => {
      return {
        count: 1,
        sock,
      };
    })
    .reduce((a, b) => {
      a[b.sock] = (a[b.sock] || 0) + b.count;
      return a;
    }, {});

  let numberOfPairs = 0;

  for (let prop in joinTheSocks) {
    if (joinTheSocks[prop] / 2 >= 1) {
      numberOfPairs += Math.trunc(joinTheSocks[prop] / 2);
    }
  }

  return numberOfPairs;
}

const n = 7;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const result = sockMerchant(n, ar);

console.log(result);
