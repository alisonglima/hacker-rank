function compareTriplets(a, b) {
  let count = 0;
  const result = [0, 0];

  if (a.length !== b.length) {
    return null;
  }

  do {
    if (a[count] > b[count]) {
      result[0]++;
    } else if (a[count] < b[count]) {
      result[1]++;
    }

    count++;
  } while (count < a.length);

  return result;
}

const alice = [17, 28, 30];
const bob = [99, 16, 8];

console.log(compareTriplets(alice, bob));
