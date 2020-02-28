function table(arg) {
  let number = Number(arg);

  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} X ${i} = ${result}`);
  }
}
table(5);
