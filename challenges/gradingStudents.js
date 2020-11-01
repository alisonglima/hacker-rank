function gradingStudents(grades) {
  const finalGrades = grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else {
      if (grade % 5 === 3) {
        return grade + 2;
      } else if (grade % 5 === 4) {
        return grade + 1;
      } else {
        return grade;
      }
    }
  });

  return finalGrades;
}

const array = [73, 67, 38, 33];

const result = gradingStudents(array);

console.log(result.join("\n") + "\n");
