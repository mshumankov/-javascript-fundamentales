function passwordGenerator(input) {
    let firstStr = input[0];
    let secondStr = input[1];
    let word = (input[2]).toUpperCase();
    let joinStr = firstStr + secondStr;
    let currentPass = '';
    let counter = 0;

    for (let char of joinStr) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            if (counter > word.length - 1) {
                counter = 0;
            }
            currentPass += word[counter];
            counter++;
        } else {
            currentPass += char;
        }
    }

    let result = currentPass.split('').reverse().join('');

    console.log(`Your generated password is ${result}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);