function matrix(n) {
  let repeatN = num => `${num} `.repeat(num);

  for (let i = 0; i < n; i++) {
    console.log(repeatN(n));
  }
}
matrix(5);
