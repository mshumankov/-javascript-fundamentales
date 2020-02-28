function leap(arg) {
  if (arg % 400 === 0) {
    console.log("yes");
  } else if (arg % 4 === 0 && arg % 100 !== 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
leap(1984);
