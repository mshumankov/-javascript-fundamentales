function nElement(args) {
  let step = Number(args.pop());
  let result = "";

  for (let i = 0; i < args.length; i += step) {
    result += `${args[i]} `;
  }
  console.log(result);
}
nElement(["5", "20", "31", "4", "20", "2"]);
