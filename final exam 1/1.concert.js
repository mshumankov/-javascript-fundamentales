function concert(input) {
    let printBandMembers = input.pop();
    let concertInfo = {};
    let sum = 0;

    function addMembers(members, band) {
        for (let person of members) {

            if (!concertInfo[band][1].includes(person)) {
                concertInfo[band][1].push(person);
            }
        }
    }

    function incrementTime(time, band) {
        concertInfo[band][0] += time;
    }

    function totalTime() {
        for (let prop in concertInfo) {
            let currentTime = concertInfo[prop][0];
            sum += currentTime
        }
    }
    for (let line of input) {
        if (line === 'start of concert') {
            break;
        }
        let [command, band, other] = line.split('; ');

        if (command === 'Add') {
            let members = other.split(', ');

            if (concertInfo.hasOwnProperty(band)) {
                addMembers(members, band);
            } else {
                concertInfo[band] = [0, members];
            }
        } else if (command === 'Play') {
            let time = Number(other);

            if (concertInfo.hasOwnProperty(band)) {
                incrementTime(time, band);
            } else {
                concertInfo[band] = [time, []];
            }
        }

    }
    totalTime();
    let sorted = Object.entries(concertInfo).sort((a, b) => {
        if (b[1][0] === a[1][0]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1][0] - a[1][0];
    })
    console.log(`Total time: ${sum}`);

    for (let band of sorted) {
        console.log(`${band[0]} -> ${band[1][0]}`);
    }

    console.log(printBandMembers);
    concertInfo[printBandMembers][1].forEach(el => {
        console.log(`=> ${el}`);
    });

}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'Play; A; 4239',
    'start of concert',
    'The Rolling Stones'
]);