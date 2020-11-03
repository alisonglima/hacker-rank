class Person {
  constructor(initialAge) {
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
      this.age = 0;
    } else {
      this.age = initialAge;
    }
  }

  amIOld() {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  }

  yearPasses() {
    return (this.age = this.age + 1);
  }
}

function main() {
  var T = [-1, 10, 16, 18];

  for (i = 0; i < T.length; i++) {
    var age = T[i];
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    console.log("");
  }
}

main();
