function sorting(input) {
  let decending = [...input.sort((a, b) => b - a)];
  let result = [];

  for (let i = 0; i < input.length / 2; i++) {
    let big = decending.shift();
    result.push(big);
    let small = decending.pop();
    result.push(small);
  }

  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 1]);
