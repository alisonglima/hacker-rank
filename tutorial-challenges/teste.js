function teste() {
  const arr = [1, 2, 3];

  let test = arr.toString();

  console.log(test.replace(/\,/g, " "));
}

teste();
