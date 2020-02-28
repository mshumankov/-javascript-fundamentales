function login(args) {
  let pass = args[0];
  let reversedPass = "";

  for (let i = pass.length - 1; i >= 0; i--) {
    let letter = pass[i];
    reversedPass += letter;
  }

  for (let i = 1; i <= args.length - 1; i++) {
    let userPass = args[i];
    if (reversedPass === userPass) {
      console.log(`User ${pass} logged in.`);
    } else {
      if (i >= 4) {
        console.log(`User ${pass} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
