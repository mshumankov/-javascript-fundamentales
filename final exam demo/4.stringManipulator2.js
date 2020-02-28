function stringManipulator(input) {
    let text = '';

    let add = (string) => {
        text += string;
    }

    let upgrade = (char) => {
        let newChar = String.fromCharCode(char.charCodeAt(0) + 1);

        let regex = new RegExp(char, 'g');
        text = text.replace(regex, newChar);
    }

    let print = () => {
        console.log(text);
    }

    let findIndex = (char) => {
        let indexes = [];

        for (let i = 0; i < text.length; i++) {
            let letter = text[i];

            if (letter === char) {
                indexes.push(i);
            }
        }

        if (indexes.length === 0) {
            console.log('None');
        } else {
            console.log(indexes.join(' '));
        }
    }

    let remove = (string) => {
        let regex = new RegExp(string, 'g');
        text = text.replace(regex, '');
    }

    let commandParser = {
        'Add': add,
        'Upgrade': upgrade,
        'Print': print,
        'Index': findIndex,
        'Remove': remove
    };

    for (let line of input) {
        if (line === 'End') {
            break;
        }
        let splited = line.split(' ');
        let command = splited.shift();

        commandParser[command](...splited);
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
]);