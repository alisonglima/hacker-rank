function countingValleys(steps, path) {
  let levelCounter = 0;
  let valleysCounter = 0;

  path.forEach((el) => {
    if (el === "U") levelCounter++;
    else {
      if (levelCounter === 0) valleysCounter++;
      levelCounter--;
    }
  });

  return valleysCounter;
}

const steps = 8;
const path = ["U", "D", "D", "D", "U", "D", "U", "U"];

const result = countingValleys(steps, path);

console.log(result);
