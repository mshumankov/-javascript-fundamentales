function spiceFlow(arg) {
  let sumSpice = 0;
  let counter = 0;

  while (arg >= 100) {
    counter++;
    sumSpice += arg - 26;
    arg -= 10;
  }

  if (sumSpice >= 26) {
    sumSpice -= 26;
  }
  console.log(counter);
  console.log(sumSpice);
}
spiceFlow(111);
