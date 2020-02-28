function addRemove(args) {
  let arr = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "add") {
      arr.push(i + 1);
    } else {
      arr.pop(arr[i - 1]);
    }
  }
  if (typeof arr[0] === "undefined") {
    console.log(`Empty`);
  } else {
    let result = arr.join(" ");
    console.log(result);
  }
}
addRemove(["remove", "remove", "remove"]);
