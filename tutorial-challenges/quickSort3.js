function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
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

function main() {
  const arr = [9, 8, 6, 7, 3, 5, 4, 1, 2];

  quickSort(arr);
}

main();
