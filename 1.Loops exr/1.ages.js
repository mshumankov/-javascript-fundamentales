function ages(arg) {
  if (arg >= 0 && arg <= 2) {
    console.log("baby");
  } else if (arg >= 3 && arg <= 13) {
    console.log("child");
  } else if (arg >= 14 && arg <= 19) {
    console.log("teenager");
  } else if (arg >= 20 && arg <= 65) {
    console.log("adult");
  } else if (arg >= 66) {
    console.log("elder");
  }
}
ages(20);
