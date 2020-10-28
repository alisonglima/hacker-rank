function birthdayCakeCandles(candles) {
  const biggestCandle = candles.sort((a, b) => a - b)[candles.length - 1];

  return candles.filter((num) => num >= biggestCandle).length;
}

const array = [4, 4, 1, 2];

console.log(birthdayCakeCandles(array));
