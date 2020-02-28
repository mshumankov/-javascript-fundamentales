function gladiator(arr) {
  let inventory = arr.shift().split(" ");
  let resultArr = [];

  for (let i of arr) {
    let equipment = i.split(" ");
    let command = equipment.shift();

    if (command === "Buy") {
      let item = equipment.shift();

      if (!inventory.includes(item)) {
        inventory.push(item);
      }
    } else if (command === "Trash") {
      let item = equipment.shift();

      if (inventory.indexOf(item) !== -1) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
      }
    } else if (command === "Repair") {
      let item = equipment.shift();
      let index = inventory.indexOf(item);

      if (index !== -1) {
        let repair = inventory.splice(index, 1);
        inventory.push(repair);
      }
    } else if (command === "Upgrade") {
      let upgrade = equipment.shift().split("-");
      let item = upgrade.shift();
      let typeUpgrade = upgrade.shift();

      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);

        inventory.splice(index + 1, 0, `${item}:${typeUpgrade}`);
      }
    }
  }

  console.log(inventory.join(" "));
}
gladiator([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel"
]);
