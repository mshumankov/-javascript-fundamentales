function neighborhoods(input) {
  let place = input.shift().split(", ");
  let listNeighbors = {};

  for (let i of place) {
    listNeighbors[i] = [0];
  }

  for (let i of input) {
    let [placeCurrent, neighbor] = i.split(" - ");

    if (listNeighbors.hasOwnProperty(placeCurrent)) {
      listNeighbors[placeCurrent][0]++;
      listNeighbors[placeCurrent].push(neighbor);
    }
  }

  let sorted = Object.entries(listNeighbors).sort((a, b) => b[1][0] - a[1][0]);

  for (let i of sorted) {
    let count = i[1].shift();
    console.log(`${i[0]}: ${count}`);

    for (let j of i[1]) {
      console.log(`--${j}`);
    }
  }
}
neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy"
]);
