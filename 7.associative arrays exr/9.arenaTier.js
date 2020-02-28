function arenaTier(input) {
  let gladiatorPool = {};

  for (let line of input) {
    let checkCommand = line.split(" ");

    if (checkCommand.length > 3) {
      let [name, technique, skill] = line.split(" -> ");
      skill = Number(skill);

      if (gladiatorPool.hasOwnProperty(name)) {
        if (gladiatorPool[name].hasOwnProperty(technique)) {
          if (gladiatorPool[name][technique] < skill) {
            gladiatorPool[name].totalSkill +=
              skill - gladiatorPool[name][technique];
            gladiatorPool[name][technique] = skill;
          }
        } else {
          gladiatorPool[name].totalSkill += skill;
          gladiatorPool[name][technique] = skill;
        }
      } else {
        gladiatorPool[name] = {};
        gladiatorPool[name].totalSkill = skill;
        gladiatorPool[name][technique] = skill;
      }
    } else if (checkCommand.length === 3) {
      let [firstGladiator, secondGladiator] = line.split(" vs ");

      if (
        gladiatorPool.hasOwnProperty(firstGladiator) &&
        gladiatorPool.hasOwnProperty(secondGladiator)
      ) {
        for (let propFirst in gladiatorPool[firstGladiator]) {
          for (let propSecond in gladiatorPool[secondGladiator]) {
            if (propFirst !== "totalSkill" && propFirst === propSecond) {
              if (
                gladiatorPool[firstGladiator][propFirst] >
                gladiatorPool[secondGladiator][propSecond]
              ) {
                delete gladiatorPool[secondGladiator];
              } else {
                delete gladiatorPool[firstGladiator];
              }
            }
          }
        }
      }
    } else {
      if (line === "Ave Cesar") {
        let sortedGladiators = Object.entries(gladiatorPool).sort(
          sortTotalskill
        );
        for (let gladiatorInfo of sortedGladiators) {
          let techniques = Object.entries(gladiatorInfo[1]).sort(sortTechique);
          gladiatorInfo[1] = techniques;
        }
        for (let gladiator of sortedGladiators) {
          console.log(`${gladiator[0]}: ${gladiator[1][0][1]} skill`);
          for (let i = 1; i < gladiator[1].length; i++) {
            console.log(`- ${gladiator[1][i][0]} <!> ${gladiator[1][i][1]}`);
          }
        }
        break;
      }
    }
  }

  function sortTotalskill(a, b) {
    let checkA = a[1].totalSkill;
    let checkB = b[1].totalSkill;
    let nameA = a[0];
    let nameB = b[0];

    if (checkA === checkB) {
      return nameA.localeCompare(nameB);
    }

    return checkB - checkA;
  }

  function sortTechique(a, b) {
    let checkA = a[1];
    let checkB = b[1];
    let nameA = a[0];
    let nameB = b[0];

    if (nameA !== "totalSkill" && nameB !== "totalSkill") {
      if (checkA === checkB) {
        return nameA.localeCompare(nameB);
      }

      return checkB - checkA;
    }
  }
}
arenaTier([
  "Pesho -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar"
]);
