function staircase(n) {
  let count = 1;

  do {
    console.log(" ".repeat(n - count) + "#".repeat(count));
    count++;
  } while (count <= n);
}

staircase(6);
