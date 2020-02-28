function equalSum(array) {
  let check = false;
  for (let i = 0; i < array.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j++) {
      let num = array[j];
      sumLeft += num;
    }
    for (let k = i + 1; k < array.length; k++) {
      let num = array[k];
      sumRight += num;
    }

    if (sumLeft === sumRight) {
      console.log(i);
      check = true;
    }
  }
  if (check === false) {
    console.log("no");
  }
}
equalSum([1, 2, 3, 3]);
