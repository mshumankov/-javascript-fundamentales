function huntingGames(args) {
  let arrGame = args.map(Number);
  let days = arrGame.shift();
  let players = arrGame.shift();
  let energyGrup = arrGame.shift();
  let waterPerson = arrGame.shift();
  let foodPerson = arrGame.shift();
  let waterAll = waterPerson * days * players;
  let foodAll = foodPerson * days * players;
  let counter = 1;

  while (energyGrup >= 0) {
    if (counter > days) {
      break;
    }
    let energyLost = arrGame.shift();
    energyGrup -= energyLost;

    if (counter % 2 === 0) {
      energyGrup = energyGrup * 1.05;
      waterAll -= waterAll * 0.3;
    }
    if (counter % 3 === 0) {
      energyGrup = energyGrup * 1.1;
      foodAll -= foodAll / players;
    }

    counter++;
  }

  if (energyGrup > 0) {
    console.log(
      `You are ready for the quest. You will be left with - ${energyGrup.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${foodAll.toFixed(
        2
      )} food and ${waterAll.toFixed(2)} water.`
    );
  }
}
huntingGames([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
  ""
]);
