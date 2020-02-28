function changeNumbers(input) {
    let stringArr = input
        .split(' ')
        .filter(e => e !== '');

    let totalSum = 0;

    for (let str of stringArr) {
        let startLetter = str[0];
        let endLetter = str[str.length - 1];
        let num = '';
        let currentCount = 0;
        let position = 0;

        for (let i = 1; i < str.length - 1; i++) {

            num += str[i]
        }
        num = Number(num);


        if (isUpper(startLetter)) {
            startLetter = startLetter.toLowerCase();
            position = startLetter.charCodeAt() - 96;
            currentCount = num / position;
        } else {
            position = startLetter.charCodeAt() - 96;
            currentCount = num * position;
        }

        if (isUpper(endLetter)) {
            endLetter = endLetter.toLowerCase();
            position = endLetter.charCodeAt() - 96;
            currentCount -= position;
        } else {
            position = endLetter.charCodeAt() - 96;
            currentCount += position;
        }

        totalSum += currentCount;
    }

    function isUpper(letter) {
        return letter.toUpperCase() === letter;
    }
    console.log(totalSum.toFixed(2));
}
changeNumbers('a1A')