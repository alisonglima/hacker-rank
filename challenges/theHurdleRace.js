function hurdleRace(k, height) {
  let doses = 0;

  height.forEach((hurdle) => {
    let diff = hurdle - k;

    if (diff > doses) doses = diff;
  });

  return doses;
}

const k = 1;
const arr = [1, 2, 3, 3, 2];

console.log(hurdleRace(k, arr));
