function smallestNum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let smallNums = sorted.slice(0, 2);
  let result = smallNums.join(" ");
  console.log(result);
}
smallestNum([3, 0, 10, 4, 7, 3]);
