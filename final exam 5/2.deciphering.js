function deciphering(input) {
    let str = input[0];
    let [searchStr, replaceStr] = input[1].split(' ');
    let pattern = /^[d-z{}|#]+$/g;
    let valid = pattern.exec(str);
    let decoded = '';

    function decodeStr() {
        for (let char of str) {
            let charNum = char.charCodeAt(0) - 3;
            let newChar = String.fromCharCode(charNum);
            decoded += newChar;
        }
    }

    function replaceSubstring() {
        while (decoded.includes(searchStr)) {
            decoded = decoded.replace(searchStr, replaceStr);
        }
    }

    if (valid) {
        decodeStr();
        replaceSubstring();
    } else {
        console.log(`This is not the book you are looking for.`);
    }
    console.log(decoded);
}
deciphering([''])