function pascalCase(text) {
    let currentWord = text[0];
    let splitedText = '';

    for (let i = 1; i < text.length; i++) {
        let char = text[i];
        if (isUpper(char)) {
            splitedText += `${currentWord}, `;
            currentWord = `${char}`
        } else {
            currentWord += char;
        }
    }
    splitedText += currentWord;

    console.log(splitedText);

    function isUpper(letter) {
        return letter.toUpperCase() === letter;
    }
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');