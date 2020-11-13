function getMoneySpent(keyboards, drives, b) {
  let mostExpensiveCombination = 0;
  let sumCombination = 0;

  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      sumCombination = keyboard + drive;
      if (sumCombination > mostExpensiveCombination && sumCombination <= b) {
        mostExpensiveCombination = sumCombination;
      }
    });
  });

  return mostExpensiveCombination > 0 ? mostExpensiveCombination : -1;
}

const b = 60;
const keyboards = [40, 50, 60];
const drives = [30, 30, 30];

const result = getMoneySpent(keyboards, drives, b);

console.log(result);
