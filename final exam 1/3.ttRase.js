function ttRace(input) {


    for (let line of input) {
        let pattern = /^([#$%*&])([A-Za-z]+)\1=(\d+)!!([\w\W]*?)$/g;
        let validPattern = pattern.exec(line);

        if (validPattern !== null) {
            let num = Number(validPattern[3]);
            let code = validPattern[4];
            let codeLength = validPattern[4].length;
            let name = validPattern[2];

            if (num === codeLength) {
                let geoCode = '';
                for (let char of code) {
                    let charNum = char.charCodeAt(0);
                    let newChar = String.fromCharCode(charNum + num);
                    geoCode += newChar;
                }
                // for (let i = 0; i < code.length; i++) {
                //     let ascii = code.charCodeAt(i);
                //     ascii += codeLength;
                //     geoCode += String.fromCharCode(ascii);
                // }

                console.log(`Coordinates found! ${name} -> ${geoCode}`);
                break;
            } else {
                console.log(`Nothing found!`);
            }

        } else {
            console.log(`Nothing found!`);
        }
    }

}
ttRace(['Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd'
]);