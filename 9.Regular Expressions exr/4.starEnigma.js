function starEnigma(input) {
    let numPlanets = input.shift();
    let attacked = [];
    let destroyed = [];

    for (let mesage of input) {
        let pattern = /[starSTAR]/g;
        let decode = mesage.match(pattern);
        let decryption = '';

        if (decode) {
            let decodeNum = mesage.match(pattern).length;

            for (let char of mesage) {
                let oldChar = char.charCodeAt();
                let newChar = String.fromCharCode(oldChar - decodeNum);
                decryption += newChar;
            }
        } else {
            let decryption = mesage;
        }

        let patternDecryption = /[^@\-!:>]*@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([D|A])![^@\-!:>]*->(\d+)[^@\-!:>]*/g;
        let validPlanet = patternDecryption.exec(decryption);
        //console.log(validPlanet);
        if (validPlanet) {
            if (validPlanet[3] === 'D') {
                destroyed.push(validPlanet);
            } else {
                attacked.push(validPlanet);
            }
        }


    }


    if (attacked.length > 0) {
        attacked = attacked.sort((a, b) => a[1].localeCompare(b[1]));
        console.log(`Attacked planets: ${attacked.length}`);
        attacked.forEach(e => console.log(`-> ${e[1]}`))
    } else {
        console.log(`Attacked planets: 0`);
    }

    if (destroyed.length > 0) {
        destroyed = destroyed.sort((a, b) => a[1].localeCompare(b[1]));
        console.log(`Destroyed planets: ${destroyed.length}`);
        destroyed.forEach(e => console.log(`-> ${e[1]}`))
    } else {
        console.log(`Destroyed planets: 0`);
    }


}
starEnigma(['jhjgjgh2',
    'hgfghdfjfgbhdfj',
    'fdjghjfgjhfghkiglhi'
]);