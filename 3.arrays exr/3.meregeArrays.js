function mergeArrays(firstArr, secondArr) {
  let result = [];
  for (let i = 0; i < firstArr.length; i++) {
    if (i % 2 === 0) {
      let numFirst = Number(firstArr[i]);
      let numSecond = Number(secondArr[i]);
      let num = numFirst + numSecond;
      result.push(num);
    } else {
      let strFirst = firstArr[i];
      let strSecond = secondArr[i];
      let strNum = strFirst + strSecond;
      result.push(strNum);
    }
  }
  let resultStr = result.join(" - ");
  console.log(resultStr);
}
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
