function piccolo(input) {
  let parking = {};
  for (let i of input) {
    let [command, carNum] = i.split(", ");

    if (command === "IN") {
      parking[carNum] = "IN";
    } else {
      delete parking[carNum];
    }
  }

  let sorted = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]));

  function sortNum(a, b) {
    let numA = Number(a[0].slice(2, 5));
    let numB = Number(b[0].slice(2, 5));

    return numA - numB;
  }

  if (sorted.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    for (let i of sorted) {
      console.log(`${i[0]}`);
    }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU"
]);
