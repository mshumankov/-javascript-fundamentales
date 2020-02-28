function reveilWords(words, sentence) {
    let wordsArr = words.split(', ');
    let sentenceNew = sentence;

    for (let word of wordsArr) {
        sentenceNew = sentenceNew.replace('*'.repeat(word.length), word);
    }

    console.log(sentenceNew);
}
reveilWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);