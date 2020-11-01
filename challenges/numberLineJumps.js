function kangaroo(x1, v1, x2, v2) {
  let k1Counter = x1;
  let k2Counter = x2;
  let counter = 0;

  do {
    if (k1Counter === k2Counter) return "YES";
    k1Counter += v1;
    k2Counter += v2;
    counter++;
  } while (counter < 10000);

  return "NO";
}

const result = kangaroo(1, 2, 2, 1);

console.log(result);
