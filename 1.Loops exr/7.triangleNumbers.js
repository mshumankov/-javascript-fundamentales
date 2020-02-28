function triangle(arg) {
  let num = Number(arg);
  for (let i = 1; i <= num; i++) {
    let print = "";
    for (let j = 1; j <= i; j++) {
      print += `${i} `;
    }
    console.log(print);
  }
}
triangle(3);
