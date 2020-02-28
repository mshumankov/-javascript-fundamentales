function bombNumbers(arr, specialArr) {
  let num = specialArr.shift();
  let power = specialArr.shift();

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum === num) {
      let start = Math.max(0, i - power);
      let end = Math.min(i + power, arr.length);

      for (let i = start; i <= end; i++) {
        arr[i] = 0;
      }
    }
  }
  let sum = 0;
  for (let numResult of arr) {
    sum += numResult;
  }

  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
