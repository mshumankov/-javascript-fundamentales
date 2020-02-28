function dayOfWeek(arg) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = Number(arg);
  if (day > 7 || day < 1) {
    console.log("Invalid day!");
  } else {
    console.log(days[day - 1]);
  }
}
dayOfWeek("11");
