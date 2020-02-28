function city(name, area, population, country, postCode) {
  let cityObj = {
    name,
    area,
    population,
    country,
    postCode
  };

  for (let prop in cityObj) {
    console.log(`${prop} -> ${cityObj[prop]}`);
  }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");
