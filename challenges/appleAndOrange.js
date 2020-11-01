function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const fallenApples = apples.map((apple) => apple + a);
  const fallenOranges = oranges.map((orange) => orange + b);

  const fellInTheHouseApples = fallenApples.filter(
    (apple) => apple >= s && apple <= t
  );
  const fellInTheHouseOranges = fallenOranges.filter(
    (orange) => orange >= s && orange <= t
  );

  console.log(fellInTheHouseApples.length);
  console.log(fellInTheHouseOranges.length);
}

const aArray = require("./Test/applesArray");
const bArray = require("./Test/orangesArray");

countApplesAndOranges(37455, 87275, 35609, 89610, aArray, bArray);
