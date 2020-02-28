function feedAnimals(input) {
    let animals = {};

    if (input && input[0]) {

        for (let line of input) {
            if (line === 'Last Info') {
                break;
            }

            let splited = line.split(':');
            let [command, name, foodLimit, area] = splited;
            foodLimit = Number(foodLimit);

            if (command === "Add") {
                if (animals.hasOwnProperty(name)) {
                    animals[name][0] = animals[name][0] + foodLimit;
                } else {
                    animals[name] = [foodLimit, area];

                }
            } else if (command === "Feed") {
                if (animals.hasOwnProperty(name)) {
                    animals[name][0] = animals[name][0] - foodLimit;
                    if (animals[name][0] <= 0) {
                        delete animals[name];
                        console.log(`${name} was successfully fed`);
                    }
                }
            }
        }


        let sorted = Object.entries(animals).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => {
            if (b[1][0] === a[1][0]) {
                return a[0].localeCompare(b[0]);
            }

            return b[1][0] - a[1][0];
        });

        console.log(`Animals:`);
        sorted.forEach(el => console.log(`${el[0]} -> ${el[1][0]}g`));

        let areaObj = {};

        for (let line of Object.entries(animals)) {
            let place = line[1][1];
            if (areaObj.hasOwnProperty(place)) {
                areaObj[place]++
            } else {
                areaObj[place] = 1
            }
        }

        let sortedArea = Object.entries(areaObj).sort((a, b) => {
            // if (b[1] === a[1]) {
            //     return b[0].localeCompare(a[0]);
            // }

            return b[1] - a[1];
        });

        console.log(`Areas with hungry animals:`);
        if (sortedArea.length > 0) {
            sortedArea.forEach(e => console.log(`${e[0]} : ${e[1]}`));
        }
    }

}
feedAnimals(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info'
]);