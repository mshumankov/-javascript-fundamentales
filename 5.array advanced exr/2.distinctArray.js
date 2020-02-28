function distinctArray(arr) {
  let result = arr.filter((num, index) => {
    return arr.indexOf(num) === index;
  });

  console.log(result.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
