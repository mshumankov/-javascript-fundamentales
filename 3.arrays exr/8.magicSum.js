function magicSum(args, n) {
  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] + args[j] === n) {
        console.log(`${args[i]} ${args[j]}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
