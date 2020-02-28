function removeOccurrences(word, text) {
    let currentText = text;
    let index = currentText.indexOf(word);

    while (index !== -1) {
        currentText = currentText.replace(word, '');
        index = currentText.indexOf(word);
    }

    console.log(currentText);
}
removeOccurrences('ice', 'kicegiciceeb');