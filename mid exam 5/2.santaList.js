function santaList(args) {
  let list = args.shift().split("&");

  for (let i = 0; i < args.length; i++) {
    let token = args[i].split(" ");
    let command = token[0];
    let name = token[1];

    if (command === "Finished!") {
      break;
    } else if (command === "Bad") {
      if (!list.includes(name)) {
        list.unshift(name);
      }
    } else if (command === "Good") {
      let index = list.indexOf(name);

      if (index !== -1) {
        list.splice(index, 1);
      }
    } else if (command === "Rename") {
      let newName = token[2];
      let index = list.indexOf(name);

      if (index !== -1) {
        list[index] = newName;
      }
    } else if (command === "Rearrange") {
      let index = list.indexOf(name);

      if (index !== -1) {
        let move = list.splice(index, 1);
        list.push(move[0]);
      }
    }
  }
  console.log(list.join(", "));
}
santaList([
  "Joshua&Aaron&Walt&Dustin&William",
  "Good Walt",
  "Bad Jon ",
  "Rename Aaron Paul",
  "Rearrange Jon",
  "Rename Peter George",
  "Finished!"
]);
