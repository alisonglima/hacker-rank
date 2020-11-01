function breakingRecords(scores) {
  let counter = 0;
  let highestScoresCounter = 0;
  let lowestScoresCounter = 0;
  let highestScore = 0;
  let lowestScore = 0;

  highestScore = scores[counter];
  lowestScore = scores[counter];

  do {
    if (scores[counter] > highestScore) {
      highestScore = scores[counter];
      highestScoresCounter++;
    } else if (scores[counter] < lowestScore) {
      lowestScore = scores[counter];
      lowestScoresCounter++;
    }

    counter++;
  } while (counter < scores.length);

  return [highestScoresCounter, lowestScoresCounter];
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

const result = breakingRecords(scores);

console.log(result.join(" "));
