function schoolGrades(input) {
  let myMap = new Map();
  for (let data of input) {
    let tokens = data.split(" ");
    let name = tokens[0];
    let grades = tokens.splice(1, tokens.length).map(Number);

    //myMap.set(name, grades);

    if (myMap.has(name)) {
      let oldGrades = myMap.get(name);
      let newGrade = [...oldGrades, ...grades];
      myMap.set(name, newGrade);
    } else {
      myMap.set(name, grades);
    }
  }

  let arr = [...myMap];
  arr.sort((a, b) => average(a, b));

  function average(a, b) {
    let sumA = 0;
    for (let grade of a[1]) {
      sumA += grade;
    }
    let sumB = 0;
    for (let grade of b[1]) {
      sumB += grade;
    }

    let averageA = sumA / a[1].length;
    let averageB = sumB / b[1].length;

    return averageA - averageB;
  }

  for (let data of arr) {
    console.log(`${data[0]}: ${data[1].join(", ")}`);
  }
  //console.log(arr);
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
