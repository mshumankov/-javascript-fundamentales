function emojiSumator(input) {
    let text = input[0];
    let emojiCode = input[1].split(':');
    let pattern = /(?<=\s)(\:[a-z]{4,}\:)(?=\s|[,.!?])/g;
    let emojiStr = ''
    let totalSum = 0;

    for (let item of emojiCode) {
        let char = String.fromCharCode(Number(item));
        emojiStr += char
    }
    let emojiPrint = [];
    let emojiAll = text.match(pattern);
    if (emojiAll) {
        for (let i = 0; i < emojiAll.length; i++) {
            let emoji = emojiAll[i];

            emojiSplit = emoji.split(':');
            emojiSplit.shift();
            emojiSplit.pop();
            emojiSplit = emojiSplit[0];
            emojiAll[i] = emojiSplit;

            let sumCurrent = 0;

            for (let letter of emojiSplit) {
                char = letter.charCodeAt();
                sumCurrent += char;
            }

            totalSum += sumCurrent;
        }

        for (let item of emojiAll) {
            let transform = `:${item}:`
            emojiPrint.push(transform);
        }

        if (emojiAll.includes(emojiStr)) {
            totalSum = totalSum * 2
        }

        console.log(`Emojis found: ${emojiPrint.join(', ')}`);

    }

    console.log(`Total Emoji Power: ${totalSum}`);


}
emojiSumator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
]);