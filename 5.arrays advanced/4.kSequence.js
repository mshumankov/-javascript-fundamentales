function kSequence(n, k) {
  let addArr = [1];

  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let end = i;
    let kArr = addArr.slice(start, end);
    let nextNum = 0;

    for (let num of kArr) {
      nextNum += num;
    }

    addArr.push(nextNum);
  }
  console.log(addArr.join(" "));
}
kSequence(6, 3);
