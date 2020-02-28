function condense(args) {
  while (args.length !== 1) {
    for (let i = 0; i < args.length - 1; i++) {
      let num = args[i] + args[i + 1];
      args[i] = num;
      if (i === args.length - 2) {
        args.pop();
      }
    }
  }
  console.log(args[0]);
}
condense([1]);
