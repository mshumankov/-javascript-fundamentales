function kathmandu(input) {

    for (let line of input) {
        if (line === 'Last note' || line === '') {
            break;
        }
        let pattern = /^([A-Za-z!@#$?\d]+)=(\d+)<<([\w\W]+)$/;
        let validMesage = pattern.exec(line);

        if (validMesage !== null) {
            let name = validMesage[1];
            let length = Number(validMesage[2]);
            let geoCode = validMesage[3];

            if (length === geoCode.length) {
                let decrypredName = '';

                for (let char of name) {
                    let charAscii = char.charCodeAt(0);

                    if ((charAscii >= 65 && charAscii <= 90) || (charAscii >= 97 && charAscii <= 122) || (charAscii >= 48 && charAscii <= 57)) {
                        decrypredName += char;
                    }
                }
                console.log(`Coordinates found! ${decrypredName} -> ${geoCode}`);
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
    }
}
kathmandu(['']);