function companyUsers(input) {
  let companyInfo = {};

  for (let line of input) {
    let [company, id] = line.split(" -> ");

    if (companyInfo.hasOwnProperty(company)) {
      if (!companyInfo[company].includes(id)) {
        companyInfo[company].push(id);
      }
    } else {
      companyInfo[company] = [];
      companyInfo[company].push(id);
    }
  }

  let sorted = Object.entries(companyInfo).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [company, id] of sorted) {
    console.log(company);

    for (let employ of id) {
      console.log(`-- ${employ}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345"
]);
