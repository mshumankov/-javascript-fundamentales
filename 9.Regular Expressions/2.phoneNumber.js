function phoneNumber(input) {
    let regex = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let result = [];
    let validNum = null;

    while ((validNum = regex.exec(input)) !== null) {
        result.push(validNum[0]);
    }

    console.log(result.join(', '));
}
phoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");