function masterclass(input) {
  let inputNum = input.map(Number);
  let budget = inputNum.shift();
  let students = inputNum.shift();
  let priceFlour = inputNum.shift();
  let priceEgg = inputNum.shift();
  let priceapron = inputNum.shift();

  let flour = 0;
  let eggs = priceEgg * 10 * students;
  let apron = priceapron * Math.ceil(students * 1.2);

  for (let i = 1; i <= students; i++) {
    if (i % 5 !== 0) {
      flour += priceFlour;
    }
  }

  let expenses = flour + eggs + apron;

  let dif = Math.abs(budget - expenses);

  if (budget >= expenses) {
    console.log(`Items purchased for ${expenses.toFixed(2)}$.`);
  } else {
    console.log(`${dif.toFixed(2)}$ more needed.`);
  }
}
masterclass(["100", "25", "4.0", "1.0", "6.0"]);
