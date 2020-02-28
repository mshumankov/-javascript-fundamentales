function loadingBar(input) {
  let barSum = "";

  function bar(num) {
    for (let i = 10; i <= 100; i += 10) {
      if (i <= num) {
        barSum += "%";
      } else {
        barSum += ".";
      }
    }
  }

  function barResult(barSum) {
    if (input === 100) {
      console.log(`${input}% Complete!`);
      console.log(`[${barSum}]`);
    } else {
      console.log(`${input}% [${barSum}]`);
      console.log(`Still loading...`);
    }
  }
  bar(input);
  barResult(barSum);
}
loadingBar(10);
