function legendaryFarming(input) {
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0
  };
  let junk = {};
  let materials = input.split(" ");

  for (let i = 0; i < materials.length; i += 2) {
    let quantity = Number(materials[i]);
    let type = materials[i + 1].toLowerCase();

    if (type === "shards" || type === "fragments" || type === "motes") {
      if (keyMaterials.hasOwnProperty(type)) {
        keyMaterials[type] += quantity;
      } else {
        keyMaterials[type] = quantity;
      }
    } else {
      if (junk.hasOwnProperty(type)) {
        junk[type] += quantity;
      } else {
        junk[type] = quantity;
      }
    }

    if (keyMaterials[type] >= 250) {
      if (type === "shards") {
        console.log(`Shadowmourne obtained!`);
        keyMaterials[type] -= 250;
        break;
      } else if (type === "fragments") {
        console.log(`Valanyr obtained!`);
        keyMaterials[type] -= 250;
        break;
      } else if (type === "motes") {
        console.log(`Dragonwrath obtained!`);
        keyMaterials[type] -= 250;
        break;
      }
    }
  }

  let sortedMaterials = Object.entries(keyMaterials).sort(sortKeyMaterial);
  let sortedJunk = Object.entries(junk).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  function sortKeyMaterial(a, b) {
    let firstMaterial = a[0];
    let secondMaterial = b[0];
    let firstQuantity = a[1];
    let secondQuantity = b[1];

    if (firstQuantity === secondQuantity) {
      return firstMaterial.localeCompare(secondMaterial);
    }

    return secondQuantity - firstQuantity;
  }
  for (let [material, quantity] of sortedMaterials) {
    console.log(`${material}: ${quantity}`);
  }

  for (let [material, quantity] of sortedJunk) {
    console.log(`${material}: ${quantity}`);
  }
}
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
