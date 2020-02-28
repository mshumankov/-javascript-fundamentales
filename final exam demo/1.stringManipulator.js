function stringManipulator(input) {
    let str = '';
    let indexes = '';

    for (let line of input) {
        let [command, value] = line.split(' ');

        if (command === 'End') {
            break;
        } else if (command === 'Add') {
            str += value;
        } else if (command === 'Upgrade') {
            while (str.includes(value)) {
                str = str.replace(value, String.fromCharCode(value.charCodeAt() + 1));
            }
        } else if (command === 'Print') {
            console.log(str);
        } else if (command === 'Index') {
            let strCopy = str;
            if (strCopy.indexOf(value) === -1) {
                console.log('None');
            }

            while (strCopy.indexOf(value) !== -1) {
                indexes += `${(strCopy.indexOf(value))} `;
                strCopy = strCopy.replace(value, String.fromCharCode(value.charCodeAt() + 1));
            }
            console.log(indexes);
        } else if (command === 'Remove') {
            let newStr = ''

            while (str.includes(value)) {
                str = str.replace(value, '');
            }
        }
    }

}
stringManipulator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End'
])