function songEncryption(input) {


    function isValid(line) {
        let pattern = /^([A-Z][a-z\s']+):([A-Z\s]+)$/g;
        let result = pattern.exec(line);
        return result;
    }

    function findKey(validLine) {
        let currentKey = validLine[1].length;
        return currentKey;
    }

    function enctyptLine(validLine, key) {
        encryptSong = '';
        for (let char of validLine[0]) {
            let charNum = char.charCodeAt(0);
            let newChar = charNum + key;
            let result = char;

            if (char !== ' ' && char !== '\'') {
                if (char === char.toUpperCase()) {
                    if (newChar > 90) {
                        result = String.fromCharCode((newChar - 90) + 64);
                    } else {
                        result = String.fromCharCode(newChar);
                    }
                } else {
                    if (newChar > 122) {
                        result = String.fromCharCode((newChar - 122) + 96);
                    } else {
                        result = String.fromCharCode(newChar);
                    }
                }
            }
            if (char === ':') {
                result = '@'
            }


            encryptSong += result;
        }
        return encryptSong;
    }

    for (let line of input) {
        if (line === 'end') {
            break;
        }
        let valid = isValid(line);

        if (valid) {
            let key = findKey(valid);
            let encryypted = enctyptLine(valid, key);
            console.log(`Successful encryption: ${encryypted}`);
        } else {
            console.log(`Invalid input!`);
        }

    }
}
songEncryption(['Eminem:VENOM',
    'Linkin \'park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);