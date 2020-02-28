function animalSanctuary(input) {
    let numLine = input.shift();
    let patternValid = /^n:[^;]+;t:[^;]+;c--[A-Za-z\s]+$/g;
    let patternLetters = /[A-Za-z\s]/g;
    let patternNum = /\d/g;
    let sum = 0;


    function isValid(line) {
        let result = line.match(patternValid);
        return result;
    }

    function sumNumbers(line) {
        let numArr = line.match(patternNum);

        if (numArr) {
            numArr = numArr.map(Number);

            for (let num of numArr) {
                sum += num;
            }
        }
    }


    for (let line of input) {
        let valid = isValid(line);

        if (valid) {
            let [name, kind, country] = valid[0].split(';');
            name = name.split(':');
            kind = kind.split(':');
            country = country.split('c--')
            name = name[1].match(patternLetters);

            if (name) {
                name = name.join('');
            } else {
                name = '';
            }

            kind = kind[1].match(patternLetters);

            if (kind) {
                kind = kind.join('')
            } else {
                kind = '';
            }
            country = country[1];

            sumNumbers(line);


            console.log(`${name} is a ${kind} from ${country}`);
        }



    }
    console.log(`Total weight of animals: ${sum}KG`);
}
animalSanctuary([]);