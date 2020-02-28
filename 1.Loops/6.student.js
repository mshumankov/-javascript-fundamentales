function student(name, age, grade) {
  let studentName = name;
  let studentAge = Number(age);
  let studentGrade = Number(grade).toFixed(2);
  console.log(
    `Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade}`
  );
}
student("Ivan", 20, 5.64865);
