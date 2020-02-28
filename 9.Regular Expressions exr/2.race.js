function race(input) {
    let participants = input.shift().split(', ');
    let raceResults = {};

    for (let line of input) {
        if (line !== 'end of race') {
            let name = line
                .match(/[A-Za-z]/g)
                .join('');
            let distance = line.match(/\d/g).reduce((a, b) => Number(a) + Number(b), 0);

            if (participants.includes(name)) {
                if (!raceResults[name]) {
                    raceResults[name] = 0;
                }
                raceResults[name] = raceResults[name] + distance;
            }

        }
    }

    let result = Object
        .keys(raceResults)
        .sort((a, b) => raceResults[b] - raceResults[a])
        .splice(0, 3);

    console.log(`1st place: ${result[0]}`);
    console.log(`2nd place: ${result[1]}`);
    console.log(`3rd place: ${result[2]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);