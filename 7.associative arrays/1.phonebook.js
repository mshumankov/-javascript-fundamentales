function phonebook(input) {
  let phonebookObj = {};

  for (let string of input) {
    let tokens = string.split(" ");
    let name = tokens[0];
    let num = tokens[1];

    phonebookObj[name] = num;
  }

  for (let prop in phonebookObj) {
    console.log(`${prop} -> ${phonebookObj[prop]}`);
  }
}
phonebook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344"
]);
