function employes(args) {
  for (let i of args) {
    let person = {
      name: i,
      id: i.length
    };

    console.log(`Name: ${person.name} -- Personal Number: ${person.id}`);
  }
}
employes([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal"
]);
