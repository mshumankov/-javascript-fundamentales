function cardGame(input) {
  let cardSign = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };

  let color = {
    C: 1,
    D: 2,
    H: 3,
    S: 4
  };

  let gameInfo = {};

  for (let line of input) {
    let [name, cards] = line.split(": ");
    cards = cards.split(", ");

    if (gameInfo.hasOwnProperty(name)) {
      gameInfo[name] = [...gameInfo[name], ...cards];
    } else {
      gameInfo[name] = cards;
    }
  }

  for (let prop in gameInfo) {
    gameInfo[prop] = new Set(gameInfo[prop]);
  }

  for (let prop in gameInfo) {
    let sum = 0;

    for (let card of gameInfo[prop]) {
      sum += count(card);
    }

    console.log(`${prop}: ${sum}`);
  }
  function count(card) {
    let cardFirstSign = cardSign[card[0]];
    let cardSecondSign = color[card[1]];
    let cardThirdSign = color[card[2]];
    let result = 0;

    if (card.length === 2) {
      result = cardFirstSign * cardSecondSign;
    } else {
      result = 10 * cardThirdSign;
    }

    return result;
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD"
]);
