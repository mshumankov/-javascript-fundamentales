function neatherRealms(input) {
    let patternSplit = /,\s*/g
    let deamonsSplited = input[0].split(patternSplit);
    let deamonsAll = [];

    if (deamonsSplited.length > 0) {
        for (let currentDeamon of deamonsSplited) {
            currentDeamon = currentDeamon.trim();

            if (currentDeamon.length > 0) {

                let patternName = /[^0-9\+\-\*\/\.]/g;
                let letters = currentDeamon.match(patternName);
                let health = 0;

                if (letters) {
                    letters.forEach(el => {
                        let num = el.charCodeAt();
                        health += num;
                    });
                }


                let patternNumbers = /\-?\d+\.?\d*/g;
                let numDeamons = currentDeamon.match(patternNumbers);
                let damage = 0;

                if (numDeamons) {
                    numDeamons.forEach(el => {
                        let num = Number(el);
                        damage += num;
                    });
                }


                let patternAction = /[\*\/]/g;
                let action = currentDeamon.match(patternAction);

                if (action) {
                    action.forEach(el => {
                        if (el === '*') {
                            damage *= 2;
                        } else {
                            damage /= 2;
                        }
                    });
                }

                let currentArr = [];
                currentArr.push(currentDeamon);
                currentArr.push(health);
                currentArr.push(damage);
                deamonsAll.push(currentArr)

                //console.log(`${currentDeamon} - ${health} health, ${damage} `);
            }

        }
        let sorted = deamonsAll.sort((a, b) => a[0].localeCompare(b[0]));
        sorted.forEach(el => console.log(`${el[0]} - ${el[1]} health, ${el[2].toFixed(2)} damage`));
    }

}
neatherRealms(['M3ph1st0**, Azazel']);