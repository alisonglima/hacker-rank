function birthday(s, d, m) {
  let checker;
  let sample;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    sample = s.slice().splice(i, m);
    checker = sample.reduce((total, number) => total + number, 0);

    if (checker === d) {
      counter++;
    }
  }

  return counter;
}

const s = [1, 1, 1, 1, 1];
const d = 3;
const m = 2;

const result = birthday(s, d, m);

console.log(result);
