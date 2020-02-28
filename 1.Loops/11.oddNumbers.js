function odd(arg) {
  let number = Number(arg);
  let sum = 0;
  for (let i = 1; i <= number * 2; i += 2) {
    console.log(i);
    sum += i;
  }
  console.log(`Sum: ${sum}`);
}
odd(5);
