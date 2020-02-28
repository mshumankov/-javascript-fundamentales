function cats(arr) {
  let catsArr = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    speak() {
      console.log(`${this.name}, age ${this.age} says Meow`)
    }
  }

  for (let cat of arr) {
    let catData = cat.split(" ");
    let name = catData[0];
    let age = catData[1];

    catsArr.push(new Cat(name, age));
  }

  for (let cat of catsArr) {
    cat.speak();
  }
}
cats(["Mellow 2", "Tom 5"]);