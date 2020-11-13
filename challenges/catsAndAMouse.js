function catAndMouse(x, y, z) {
  if (Math.abs(x - z) < Math.abs(y - z)) {
    return "Cat A";
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

const x = 1;
const y = 2;
const z = 3;

const result = catAndMouse(x, y, z);

console.log(result);
