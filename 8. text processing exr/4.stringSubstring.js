function stringSubstring(word, text) {
    let textNew = text.toLowerCase();
    let wordNew = word.toLowerCase();
    let textArr = textNew.split(' ');

    for (let wordArr of textArr) {
        if (wordArr === wordNew) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);

}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);