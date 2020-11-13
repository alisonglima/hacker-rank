// function climbingLeaderboard(scores, alice) {
//   let uniqueScores = [...new Set(scores)];
//   const ranks = [];
//   let aux;
//   let i;

//   alice.forEach((el) => {
//     i = uniqueScores.indexOf(el);
//     if (i > -1) {
//       ranks.push(i + 1);
//     } else {
//       aux = [...uniqueScores, el].sort((a, b) => b - a);
//       ranks.push(aux.indexOf(el) + 1);
//     }
//   });

//   return ranks;
// }

function climbingLeaderboard(scores, alice) {
  let result = [];
  let uniqueScores = [...new Set(scores)];
  for (const score of alice) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  return result;
}

function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);
    // base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
    // recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

const ranked = require("../climbingTest/scores");
const player = require("../climbingTest/alice");

console.time();

let uniqueScores = [...new Set(player)];

console.log(uniqueScores);

// const result = climbingLeaderboard(ranked, player);

console.timeEnd();

// console.log(result.join("\n") + "\n");
