function springVacation(args) {
  let arr = args.map(Number);

  let days = arr.shift();
  let budget = arr.shift();
  let people = arr.shift();
  let fuelKm = arr.shift();
  let foodPersonDay = arr.shift();
  let roomPersonNight = arr.shift();

  if (people > 10) {
    roomPersonNight = roomPersonNight - roomPersonNight * 0.25;
  }

  let food = foodPersonDay * days * people;
  let hotel = roomPersonNight * days * people;
  let expences = food + hotel;

  for (let i = 0; i < arr.length; i++) {
    if (expences > budget) {
      break;
    }

    let distance = arr[i];
    let fuel = distance * fuelKm;
    expences += fuel;

    if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0) {
      expences += expences * 0.4;
    }
    if ((i + 1) % 7 === 0) {
      expences -= expences / people;
    }
  }

  let dif = Math.abs(budget - expences);

  if (expences > budget) {
    console.log(
      `Not enough money to continue the trip. You need ${dif.toFixed(2)}$ more.`
    );
  } else {
    console.log(
      `You have reached the destination. You have ${dif.toFixed(
        2
      )}$ budget left.`
    );
  }
}
springVacation([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123"
]);
