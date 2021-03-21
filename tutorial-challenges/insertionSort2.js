function insertionSort2(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(changePosition(arr, i).join(" "));
    } else if (arr[i + 1]) {
      console.log(arr.join(" "));
    }
  }
}

function changePosition(arr, position) {
  let newArr = arr.splice(0, position + 2);
  newArr.sort((a, b) => a - b);
  arr.unshift(...newArr);

  return arr;
}

const arr = [3, 4, 7, 5, 6, 2, 1];

insertionSort2(arr.length, arr);
