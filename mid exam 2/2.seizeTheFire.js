function seizeTheFire(args) {
  let arrFire = args[0].split("#");
  let water = Number(args[1]);
  let newFireArr = [];
  let effortAll = 0;
  let fireTotal = 0;

  for (let i = 0; i < arrFire.length; i++) {
    let fireCell = arrFire[i].split(" = ");
    let typeFire = fireCell[0];
    let valueCell = Number(fireCell[1]);

    if (typeFire === "High") {
      if (valueCell >= 81 && valueCell <= 125) {
        if (water < valueCell) {
          continue;
        }
        water -= valueCell;
        let effort = valueCell * 0.25;
        effortAll += effort;
        newFireArr.push(` - ${valueCell}`);
        fireTotal += valueCell;
      }
    } else if (typeFire === "Medium") {
      if (valueCell >= 51 && valueCell <= 80) {
        if (water < valueCell) {
          continue;
        }
        water -= valueCell;
        let effort = valueCell * 0.25;
        effortAll += effort;
        newFireArr.push(` - ${valueCell}`);
        fireTotal += valueCell;
      }
    } else if (typeFire === "Low") {
      if (valueCell >= 1 && valueCell <= 50) {
        if (water < valueCell) {
          continue;
        }
        water -= valueCell;
        let effort = valueCell * 0.25;
        effortAll += effort;
        newFireArr.push(` - ${valueCell}`);
        fireTotal += valueCell;
      }
    }
  }
  console.log(`Cells:`);
  if (newFireArr.length !== 0) {
    console.log(`${newFireArr.join("\n")}`);
  }

  console.log(`Effort: ${effortAll.toFixed(2)}`);
  console.log(`Total Fire: ${fireTotal}`);
}
seizeTheFire(["High = 89#Low = 28#Medium = 77#Low = 23", "1250"]);
