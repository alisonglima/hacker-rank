function runningTime(arr) {
  let i = 0,
    j = 0,
    counter = 0;
  let value;
  for (i = 1; i < arr.length; i++) {
    value = arr[i];
    j = i - 1;
    while (value < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
      counter++;
    }
    arr[j + 1] = value;
  }

  console.log(counter);
}

const arr = [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9];

runningTime(arr);
