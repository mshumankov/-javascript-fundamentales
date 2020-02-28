function countString(text, word) {
    let textArr = text.split(' ');
    let counter = 0;
    for (let str of textArr) {
        if (str === word) {
            counter++;
        }
    }

    console.log(counter);
}
countString("This is a word and it also is a sentence", "is");