function towns(args) {
  for (let i of args) {
    let data = i.split(" | ");

    let city = {
      town: data[0],
      latitude: Number(data[1]).toFixed(2),
      longitude: Number(data[2]).toFixed(2)
    };
    console.log(city);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
