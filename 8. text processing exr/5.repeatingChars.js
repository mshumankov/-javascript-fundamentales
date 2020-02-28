function repeatingChars(text) {
    let result = text[0];

    for (let i = 1; i < text.length; i++) {
        let previous = text[i - 1];
        let current = text[i];

        if (current !== previous) {
            result += current
        }
    }

    console.log(result);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa');