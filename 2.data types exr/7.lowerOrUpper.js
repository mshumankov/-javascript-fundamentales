function lowerOrUpper(arg) {
  let charAscii = arg.charCodeAt(0);

  if (charAscii >= 64 && charAscii <= 90) {
    console.log("upper-case");
  }
  if (charAscii >= 97 && charAscii <= 122) {
    console.log("lower-case");
  }
}
lowerOrUpper("l");
