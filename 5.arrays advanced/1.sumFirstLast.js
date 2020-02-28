function sumFirstLast(args) {
  let first = Number(args.shift());
  let last = Number(args.pop());

  return first + last;
}
console.log(sumFirstLast(["20", "30", "40"]));
