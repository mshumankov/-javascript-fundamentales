function pyramid(first, second) {
  let base = Number(first);
  let increment = Number(second);
  let stoneSum = 0;
  let marbleSum = 0;
  let lapisSum = 0;
  let goldSum = 0;
  let heightSum = 0;
  let counter = 0;

  for (let i = base; i > 0; i -= 2) {
    counter++;
    heightSum += increment;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    if (i <= 2) {
      gold = i * i * increment;
    } else if (counter === 5) {
      counter = 0;
      stone = (i - 2) * (i - 2) * increment;
      lapis = (i * i - (i - 2) * (i - 2)) * increment;
    } else {
      marble = (i * i - (i - 2) * (i - 2)) * increment;
      stone = (i - 2) * (i - 2) * increment;
    }

    stoneSum += stone;
    marbleSum += marble;
    lapisSum += lapis;
    goldSum += gold;
  }
  console.log(`Stone required: ${Math.ceil(stoneSum)}`);
  console.log(`Marble required: ${Math.ceil(marbleSum)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisSum)}`);
  console.log(`Gold required: ${Math.ceil(goldSum)}`);
  console.log(`Final pyramid height: ${Math.floor(heightSum)}`);
}
pyramid(23, 0.5);
