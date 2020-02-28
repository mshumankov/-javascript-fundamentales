function printSum(first, second) {
  let result = "";
  let sum = 0;

  for (let i = first; i <= second; i++) {
    result += `${i} `;
    sum += i;
  }
  console.log(result);
  console.log(`Sum: ${sum}`);
}
printSum(5, 10);
