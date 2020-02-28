function convertToJsun(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor
  };

  let result = JSON.stringify(person);
  console.log(result);
}
convertToJsun("George", "Jones", "Brown");
