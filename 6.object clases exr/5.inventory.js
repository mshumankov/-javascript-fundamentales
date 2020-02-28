function inventory(args) {
  let heroesAll = [];

  args.forEach(element => {
    let tokens = element.split(" / ");
    let items = tokens[2].split(", ");
    items.sort((a, b) => a.localeCompare(b));
    items = items.join(", ");

    heroesAll.push({ hero: tokens[0], level: Number(tokens[1]), items: items });
  });

  heroesAll.sort((a, b) => a.level - b.level);

  for (let i of heroesAll) {
    console.log(`Hero: ${i.hero}`);
    console.log(`level => ${i.level}`);
    console.log(`items => ${i.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
]);
