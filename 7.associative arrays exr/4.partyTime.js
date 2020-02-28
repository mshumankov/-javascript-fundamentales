function partyTima(input) {
  let index = input.indexOf("PARTY");
  let invited = input.slice(0, index);
  let arrived = input.slice(index + 1);

  let party = {
    vip: [],
    regular: []
  };
  for (let guest of invited) {
    if (isRegular(guest)) {
      party.regular.push(guest);
    } else {
      party.vip.push(guest);
    }
  }

  for (let guest of arrived) {
    if (isRegular(guest)) {
      let indexArrived = party.regular.indexOf(guest);

      party.regular.splice(indexArrived, 1);
    } else {
      let indexArrived = party.vip.indexOf(guest);

      party.vip.splice(indexArrived, 1);
    }
  }

  let num = party.vip.length + party.regular.length;

  function isRegular(guest) {
    let simbol = guest[0];

    if (isNaN(simbol)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(num);
  console.log(party.vip.join("\n"));
  console.log(party.regular.join("\n"));
}
partyTima([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc"
]);
