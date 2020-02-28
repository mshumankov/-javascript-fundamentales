function reverseNumbers(n, args) {
  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    result += `${args[i]} `;
  }
  console.log(result);
}
reverseNumbers(3, [10, 20, 30, 40, 50]);
