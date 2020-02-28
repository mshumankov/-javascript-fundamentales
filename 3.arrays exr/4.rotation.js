function rotation(args, n) {
  let counter = n;
  while (counter !== 0) {
    let current = args.shift();
    args.push(current);
    counter--;
  }
  let result = args.join(" ");
  console.log(result);
}
rotation([51, 47, 32, 61, 21], 2);
