function addSubstract(firstNum, secondNum, thirdNum) {
  let sum = (a, b) => a + b;

  let substract = (result, thirdNum) => result - thirdNum;
  let result = sum(firstNum, secondNum);
  console.log(substract(result, thirdNum));
}
addSubstract(23, 6, 10);
