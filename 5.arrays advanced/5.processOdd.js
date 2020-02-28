function procesOdd(arrNumbers) {
  let odd = arrNumbers.filter((num, index) => index % 2 !== 0);

  let dobble = odd.map(num => num * 2);
  let result = [];
  dobble.forEach(element => {
    result.unshift(element);
  });
  let resultStr = result.join(" ");
  console.log(resultStr);
}
procesOdd([10, 15, 20, 25]);
