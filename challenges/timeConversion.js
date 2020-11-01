function timeConversion(s) {
  const timeHour = s.substr(0, 2);

  let hour = "";

  if (s.indexOf("AM") !== -1) {
    if (timeHour === "12") {
      hour = "00";
    } else {
      hour = timeHour;
    }
  } else {
    if (timeHour === "12") {
      hour = timeHour;
    } else {
      hour = +timeHour + 12;
    }
  }

  const timeWithoutSuffixAndHour =
    s.indexOf("AM") === -1
      ? s.substr(0, s.indexOf("PM")).substr(2)
      : s.substr(0, s.indexOf("AM")).substr(2);

  return hour + timeWithoutSuffixAndHour;
}

console.log(timeConversion("12:05:39AM") === "00:05:39");
console.log(
  timeConversion("12:05:39PM"),
  timeConversion("12:05:39PM") === "12:05:39"
);
