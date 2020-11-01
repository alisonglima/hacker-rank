//Essa função obtém os "fatorandos" do primeiro array.
function getAllFactorsOfA(firstArray) {
  const aFactors = [];
  firstArray.forEach((num) => {
    for (let i = 1; i <= 100; i++) {
      if (i % num === 0) aFactors.push(i);
    }
  });

  return aFactors;
}

//Essa função obtém os fatores do segundo array.
function getAllFactorsOfB(secondArray, uniqueFactorsOfA) {
  const allFactorsOfB = [];

  secondArray.forEach((bNum) => {
    uniqueFactorsOfA.forEach((aNum) => {
      if (bNum % aNum === 0) allFactorsOfB.push(aNum);
    });
  });

  return allFactorsOfB;
}

//Essa função obtém apenas os "fatorandos" comuns dos elementos do primeiro array.
function getTheUniqueFactorsOfA(lengthOfA, allFactorsOfA) {
  let uniqueFactorsOfA = [];
  if (lengthOfA > 1) {
    uniqueFactorsOfA = allFactorsOfA.filter(
      (num, i) => allFactorsOfA.indexOf(num) !== i
    );
  } else {
    uniqueFactorsOfA = allFactorsOfA;
  }

  return uniqueFactorsOfA;
}

//Essa função organiza os fatores do segundo array e suas quantidades de aparições em um objeto.
function organizesFactorsOfB(allFactorsOfB) {
  const organizesFactorsOfB = allFactorsOfB
    .map((num) => {
      return {
        count: 1,
        number: num,
      };
    })
    .reduce((a, b) => {
      a[b.number] = (a[b.number] || 0) + b.count;
      return a;
    }, {});

  return organizesFactorsOfB;
}

//Essa função obtém os fatores comuns aos elementos do segundo array.
function getTheUniqueFactorsOfB(getTheUniqueFactorsOfB) {
  let breakPoint;
  let uniqueFactorsOfB;

  for (let i = 0; i <= 10; i++) {
    if (
      Object.keys(getTheUniqueFactorsOfB).filter(
        (a) => getTheUniqueFactorsOfB[a] > i
      ).length === 0
    ) {
      breakPoint = i;
      break;
    }
  }

  for (let i = 0; i < breakPoint; i++) {
    uniqueFactorsOfB = Object.keys(getTheUniqueFactorsOfB).filter(
      (a) => getTheUniqueFactorsOfB[a] > i
    );
  }

  return uniqueFactorsOfB;
}

function getTotalX(a, b) {
  const allFactorsOfA = getAllFactorsOfA(a);

  const lengthOfA = a.length;

  const uniqueFactorsOfA = getTheUniqueFactorsOfA(lengthOfA, allFactorsOfA);

  const allFactorsOfB = getAllFactorsOfB(b, uniqueFactorsOfA);

  if (allFactorsOfB.length === 0) return 0;

  const organizedFactorsOfB = organizesFactorsOfB(allFactorsOfB);

  const uniqueFactorsOfB = getTheUniqueFactorsOfB(organizedFactorsOfB);

  return uniqueFactorsOfB.length;
}

const array1 = [1];
const array2 = [72, 48];

const result = getTotalX(array1, array2);

console.log(result);
