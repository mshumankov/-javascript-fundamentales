function kNumbers(input) {
  let k = input.shift();

  let firstK = input.slice(0, k);
  let lastK = input.slice(input.length - k);

  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}
kNumbers([3, 6, 7, 8, 9]);
