function barIncome(arr) {
    let totalSum = 0;

    for (let line of arr) {
        if (line !== 'end of shift') {
            let pattern = /%([A-Z][a-z]*)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+\.?\d+)\$/gm;

            let validShift = pattern.exec(line);

            if (validShift) {
                let name = validShift[1];
                let product = validShift[2];
                let quantity = Number(validShift[3]);
                let price = Number(validShift[4]);
                let count = quantity * price;
                totalSum += count;

                console.log(`${name}: ${product} - ${count.toFixed(2)}`);
            }
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|val456id20$',
    'end of shift'
])