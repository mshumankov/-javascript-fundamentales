function negativePositiveNumbers(arr) {
  let newArr = [];

  for (let num of arr) {
    num >= 0 ? newArr.push(num) : newArr.unshift(num);
  }

  console.log(newArr.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9]);
