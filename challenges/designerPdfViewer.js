function designerPdfViewer(h, word) {
  // prettier-ignore
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let o = {};

  for (let i = 0; i < alphabet.length; i++) {
    o[alphabet[i]] = h[i];
  }

  const words = word.match(/[a-z]/g);
  let biggestLetter = 0;

  words.forEach((el) => {
    if (o[el] > biggestLetter) biggestLetter = o[el];
  });

  const results = biggestLetter * words.length;

  return results;
}

const arr = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
];

const word = " torn";

console.log(designerPdfViewer(arr, word));
