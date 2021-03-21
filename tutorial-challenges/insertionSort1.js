function insertionSort1(n, arr) {
  const num = arr.pop();

  for (let i = arr.length - 1; i >= -1; i--) {
    if (arr[i] > num) {
      addNumToArray(arr[i], arr);
    } else {
      addNumToArray(num, arr);
      break;
    }
  }
}

function addNumToArray(num, arr) {
  let newArr = JSON.parse(JSON.stringify(arr));

  newArr.push(num);
  newArr.sort((a, b) => a - b);
  console.log(newArr.join(" "));
}

const arr = [2, 4, 6, 8, 3];

insertionSort1(arr.length, arr);
