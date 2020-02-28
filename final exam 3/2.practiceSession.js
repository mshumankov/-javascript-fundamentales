function practiceSession(input) {
    let racerInfo = {};

    function addRoad(road, racer) {
        if (racerInfo.hasOwnProperty(road)) {
            racerInfo[road].push(racer);
        } else {
            racerInfo[road] = [racer];
        }
    }

    function moveRacer(currentRoad, racer, nextRoad) {
        let index = racerInfo[currentRoad].indexOf(racer);

        if (index !== -1) {
            let racerMove = racerInfo[currentRoad].splice(index, 1);
            racerInfo[nextRoad].push(racerMove[0]);
        }
    }

    function deleteRoad(road) {
        if (racerInfo.hasOwnProperty(road)) {
            delete racerInfo[road];
        }
    }

    for (let line of input) {
        let splitLine = line.split('->');
        let command = splitLine.shift();

        if (command === 'END') {
            break;
        } else if (command === 'Add') {
            let [road, racer] = splitLine;
            addRoad(road, racer);
        } else if (command === 'Move') {
            let [currentRoad, racer, nextRoad] = splitLine;
            moveRacer(currentRoad, racer, nextRoad);
        } else if (command === 'Close') {
            let road = splitLine[0];
            deleteRoad(road);
        }

    }
    console.log('Practice sessions:');
    let sorted = Object.entries(racerInfo)
        .sort((a, b) => {
            if (b[1].length === a[1].length) {
                return a[0].localeCompare(b[0]);
            }
            return b[1].length - a[1].length;
        });

    for (let road of sorted) {
        console.log(road[0]);
        road[1].forEach((el) => console.log(`++${el}`));
    }
}
practiceSession(['Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END'
]);