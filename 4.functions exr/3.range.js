function range(firstChar, secondChar) {
  let firstNum = firstChar.charCodeAt(0);
  let secondNum = secondChar.charCodeAt(0);

  let maxNum = Math.max(firstNum, secondNum);
  let minNum = Math.min(firstNum, secondNum);
  let arr = [];

  for (let i = minNum + 1; i < maxNum; i++) {
    arr.push(String.fromCharCode(i));
  }

  console.log(arr.join(" "));
}
range("#", ":");
