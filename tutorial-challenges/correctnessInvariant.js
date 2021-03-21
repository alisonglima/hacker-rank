function insertionSort(N, arr) {
  let i = 0,
    j = 0;
  let value;
  for (i = 1; i < N; i++) {
    value = arr[i];
    j = i - 1;
    while (value < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }

  console.log(arr.join(" "));
}

const arr = [4, 1, 3, 5, 6, 2];

insertionSort(arr.length, arr);
