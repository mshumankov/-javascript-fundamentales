function cutReverse(text) {
    let textLength = text.length;
    let firstText = (text.substring(0, (textLength / 2))).split('').reverse().join('');
    let secondText = text.substring((textLength / 2)).split('').reverse().join('');

    console.log(firstText);
    console.log(secondText);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');