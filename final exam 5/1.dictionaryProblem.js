function dictionaryProblem(input) {
    let [str, words, command] = input;
    let splitedStr = str.split(' | ');
    let dictionary = {};

    for (let i of splitedStr) {
        let splitWord = i.split(':');
        let word = splitWord[0];
        let definition = splitWord[1].trim();

        if (dictionary.hasOwnProperty(word)) {
            dictionary[word].push(definition);
        } else {
            dictionary[word] = [definition];
        }
    }

    let splitedWords = words.split(' | ');

    for (let word of splitedWords) {
        if (dictionary.hasOwnProperty(word)) {
            let sortedLength = dictionary[word].sort((a, b) => b.length - a.length);
            console.log(`${word}`);

            for (let definition of sortedLength) {
                console.log(` -${definition}`);
            }
        }
    }

    if (command === 'End') {} else {
        let sortedWords = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
        let wordsList = '';

        for (let word of sortedWords) {
            wordsList += `${word[0]} `;
        }

        console.log(wordsList);
    }
    //console.log(dictionary);
}
dictionaryProblem(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List'
]);