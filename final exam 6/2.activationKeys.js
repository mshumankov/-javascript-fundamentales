function activationKeys(input) {
    let splited = input[0].split('&');
    let formated = [];

    for (let line of splited) {
        let pattern = /^[A-Za-z\d]+$/;
        let valid = pattern.exec(line);

        if (valid) {
            if (line.length === 16) {
                let dashed = '';
                let counter = 1;

                for (let i = 0; i < line.length; i++) {
                    let char = line[i];
                    dashed += char;

                    if (counter === 4 && i !== line.length - 1) {
                        dashed += '-'
                        counter = 0;
                    }
                    counter++;
                }
                formated.push(dashed);
            } else if (line.length === 25) {
                if (line.length === 25) {
                    let dashed = '';
                    let counter = 1;

                    for (let i = 0; i < line.length; i++) {
                        let char = line[i];
                        dashed += char;

                        if (counter === 5 && i !== line.length - 1) {
                            dashed += '-'
                            counter = 0;
                        }
                        counter++;
                    }
                    formated.push(dashed);
                }
            }
        }


    }

    for (let i = 0; i < formated.length; i++) {
        let code = formated[i];
        let newCode = '';
        for (let char of code) {
            let newChar = char.toUpperCase();

            if (!isNaN(newChar)) {
                newChar = 9 - Number(newChar);
            }
            newCode += newChar
        }
        formated[i] = newCode;
    }

    console.log(formated.join(', '));
}
activationKeys(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);