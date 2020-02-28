function cookingFactori(input) {
  let resultArr = [];

  for (let i = 0; i < input.length; i++) {
    let command = input[i];

    if (command === "Bake It!") {
      break;
    }

    let arrCurent = command.split("#").map(Number);
    let sum = 0;

    for (let i = 0; i < arrCurent.length; i++) {
      let num = arrCurent[i];
      sum += num;
    }

    let length = arrCurent.length + 1;
    let average = sum / length;

    let currentArr = [];
    currentArr.push(arrCurent);
    currentArr.push(sum);
    currentArr.push(average);
    currentArr.push(length);

    resultArr.push(currentArr);
  }

  let bestBatch = resultArr[0];

  for (let i = 0; i < resultArr.length; i++) {
    let currentBatch = resultArr[i];

    if (currentBatch[1] > bestBatch[1]) {
      bestBatch = currentBatch;
    } else if (currentBatch[1] === bestBatch[1]) {
      if (currentBatch[2] > bestBatch[2]) {
        bestBatch = currentBatch;
      } else if (currentBatch[2] === bestBatch[2]) {
        if (currentBatch[3] < bestBatch[3]) {
          bestBatch = currentBatch;
        }
      }
    }
  }

  console.log(`Best Batch quality: ${bestBatch[1]}`);
  console.log(`${bestBatch[0].join(" ")}`);
}
cookingFactori(["5#3#2", "10#2#-2#1#-1", "4#2#1", "Bake It!"]);
