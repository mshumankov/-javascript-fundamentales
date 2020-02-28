function minerTask(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (resources.hasOwnProperty(resource)) {
      resources[resource] += quantity;
    } else {
      resources[resource] = quantity;
    }
  }

  for (let prop in resources) {
    console.log(`${prop} -> ${resources[prop]}`);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
