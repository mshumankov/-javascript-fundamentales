function sorting(args) {
  args.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  console.log(args.join("\n"));
}
sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
