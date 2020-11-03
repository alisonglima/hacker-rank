function dayOfProgrammer(year) {
  let isLeapYear = false;

  if (year !== 1918 && year % 4 === 0) isLeapYear = true;

  if (year > 1918 && year.toString().substr(2) === "00" && year % 400 !== 0)
    isLeapYear = false;

  if (year === 1918) return `26.09.${year}`;

  if (isLeapYear) return `12.09.${year}`;
  else return `13.09.${year}`;
}

const year = 1800;

const result = dayOfProgrammer(year);

console.log(result);
