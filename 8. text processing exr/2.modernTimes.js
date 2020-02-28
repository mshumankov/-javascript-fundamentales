function modernTimes(sentence) {
    let words = [];

    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        let isLetter = true;

        if (letter === '#') {
            let currentWord = '';

            for (let j = i + 1; j < sentence.length; j++) {
                let char = sentence[j];
                let ascci = (char.toLowerCase()).charCodeAt(0);

                if (char === ' ') {
                    break;
                }
                if (!(ascci >= 97 && ascci <= 122)) {
                    isLetter = false;
                }
                currentWord += char;
            }
            if (isLetter) {
                words.push(currentWord);
            }
        }
    }
    let filtered = words.filter((e) => e !== '')
    console.log(filtered.join('\n'));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');