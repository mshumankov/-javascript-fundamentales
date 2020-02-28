function perfectNum(input) {
  let halfNum = input / 2;
  let sum = 0;

  function countNum(num) {
    for (let i = 1; i <= num; i++) {
      if (input % i === 0) {
        sum += i;
      }
    }
  }

  function isPerfect(sum) {
    if (input === sum) {
      console.log("We have a perfect number!");
    } else {
      console.log(`It's not so perfect.`);
    }
  }

  countNum(halfNum);
  isPerfect(sum);
}
perfectNum(30);
