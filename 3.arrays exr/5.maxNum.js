function maxNum(args) {
  let result = [];
  for (let i = 0; i < args.length; i++) {
    let chek = true;
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] <= args[j]) {
        chek = false;
        break;
      }
    }
    if (chek === true) {
      result.push(args[i]);
    }
  }
  let resultStr = result.join(" ");
  console.log(resultStr);
}
maxNum([41, 41, 34, 20]);
