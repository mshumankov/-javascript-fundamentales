function calculator(first, second, third) {
  // let firstNum = `${first}`;
  // let thirdNum = `${third}`;

  let result = `${first} ${second} ${third}`;

  console.log(eval(result).toFixed(2));
}
calculator(5, "+", 10);
