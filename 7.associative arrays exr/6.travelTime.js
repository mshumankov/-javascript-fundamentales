function travelTime(input) {
  let travel = {};

  for (let line of input) {
    let [country, town, travelCost] = line.split(" > ");
    travelCost = Number(travelCost);

    if (travel.hasOwnProperty(country)) {
      if (travel[country].hasOwnProperty(town)) {
        let oldCost = travel[country][town];

        if (travelCost < oldCost) {
          travel[country][town] = travelCost;
        }
      } else {
        travel[country][town] = travelCost;
      }
    } else {
      travel[country] = {};
      travel[country][town] = travelCost;
    }
  }

  let travelArr = Object.entries(travel);

  for (let i of travelArr) {
    let towns = Object.entries(i[1]);
    i[1] = towns;
  }

  let sortCountry = travelArr.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i of sortCountry) {
    let sorted = i[1].sort((a, b) => a[1] - b[1]);
    i[1] = sorted;
  }

  for (let country of sortCountry) {
    let printResult = `${country[0]} -> `;
    for (let town of country[1]) {
      printResult += `${town[0]} -> ${town[1]} `;
    }
    console.log(printResult);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 100",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
]);
