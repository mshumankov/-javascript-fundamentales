function songs(args) {
  class Song {
    constructor(name, time, typeList) {
      (this.name = name), (this.time = time), (this.typeList = typeList);
    }
  }

  let numberSongd = args.shift();
  let type = args.pop();
  let songsArr = [];

  for (let item of args) {
    let [typeList, name, time] = item.split("_");
    let song = new Song(name, time, typeList);
    songsArr.push(song);
  }

  if (type === "all") {
    songsArr.forEach(song => console.log(song.name));
  } else {
    let filtered = songsArr.filter(song => song.typeList === type);
    filtered.forEach(song => console.log(song.name));
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite"
]);
