function movies(input) {
  let moviesInfo = [];

  for (let i of input) {
    let tokens = i.split(" ");
    let add = tokens[0];

    if (add === "addMovie") {
      let movie = tokens.slice(1).join(" ");

      moviesInfo.push({ name: movie });
    } else if (i.includes("directedBy")) {
      let index = tokens.indexOf("directedBy");
      let movieName = tokens.slice(0, index).join(" ");
      let director = tokens.slice(index + 1).join(" ");

      let movie = moviesInfo.find(m => m.name === movieName);

      if (movie) {
        movie.director = director;
      }
    } else if (i.includes("onDate")) {
      let index = tokens.indexOf("onDate");
      let movieName = tokens.slice(0, index).join(" ");
      let date = tokens.slice(index + 1).join(" ");

      let movie = moviesInfo.find(m => m.name === movieName);

      if (movie) {
        movie.date = date;
      }
    }
  }

  for (let i of moviesInfo) {
    if (
      i.hasOwnProperty("name") &&
      i.hasOwnProperty("date") &&
      i.hasOwnProperty("director")
    ) {
      console.log(JSON.stringify(i));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen"
]);
