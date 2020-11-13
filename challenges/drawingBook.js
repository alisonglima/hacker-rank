function pageCount(n, p) {
  const isPageEven = p % 2 === 0;
  const isLastPageEven = n % 2 === 0;

  const mountBook = [];

  for (let i = 0; i <= n; i++) {
    mountBook.push(i);

    if (i === n && isLastPageEven) {
      mountBook.push(n + 1);
    }
  }

  let pageCounterFromTheBegging = 0;
  let pageCounterOfTheEnd = 0;

  for (let i = 0; i < mountBook.length; i += 2) {
    if (isPageEven) {
      if (i < p) {
        pageCounterFromTheBegging++;
      }
    } else {
      if (i + 1 < p) {
        pageCounterFromTheBegging++;
      }
    }
  }

  for (let i = mountBook.slice().pop(); i >= 0; i -= 2) {
    if (isPageEven) {
      if (i - 1 > p) {
        pageCounterOfTheEnd++;
      }
    } else {
      if (i > p) {
        pageCounterOfTheEnd++;
      }
    }
  }

  return pageCounterFromTheBegging <= pageCounterOfTheEnd
    ? pageCounterFromTheBegging
    : pageCounterOfTheEnd;
}

const n = 5;
const p = 3;

const result = pageCount(n, p);

console.log(result);
