function convertToObject(jsonStr) {
  let person = JSON.parse(jsonStr);
  for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
