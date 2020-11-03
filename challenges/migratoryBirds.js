function migratoryBirds(arr) {
  const totalBirds = arr
    .map((bird) => {
      return {
        count: 1,
        bird: bird,
      };
    })
    .reduce((a, b) => {
      a[b.bird] = (a[b.bird] || 0) + b.count;
      return a;
    }, {});

  let aux = 0;
  let birdMostOften = [];

  for (let prop in totalBirds) {
    if (totalBirds[prop] >= aux) {
      aux = totalBirds[prop];
    }
  }

  for (let prop in totalBirds) {
    if (totalBirds[prop] === aux) {
      birdMostOften.push(prop);
    }
  }

  return birdMostOften[0];
}

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

const result = migratoryBirds(arr);

console.log(result);
