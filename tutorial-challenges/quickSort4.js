let qSwaps = 0,
  iSwaps = 0;

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  qSwaps++;
}

function quickSort(array, left, right) {
  if (left >= right) return;

  left = left || 0;
  right = right || array.length - 1;

  const pivot = array[right];
  let wall = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, i, wall);
      wall++;
    }
  }

  swap(array, right, wall);

  console.log(array.join(" "));

  quickSort(array, left, wall - 1);
  quickSort(array, wall + 1, right);
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(changePosition(arr, i).join(" "));
    } else if (arr[i + 1]) {
      console.log(arr.join(" "));
    }
    iSwaps++;
  }
}

function changePosition(arr, position) {
  let newArr = arr.splice(0, position + 2);
  newArr.sort((a, b) => a - b);
  arr.unshift(...newArr);

  return arr;
}

function main() {
  const arr = [1, 3, 9, 8, 2, 7, 5];

  insertionSort(arr);

  quickSort(arr);

  console.log(iSwaps);
}

main();
