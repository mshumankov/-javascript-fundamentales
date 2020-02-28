function furniture(input) {
    let regex = />>(?<item>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let bought = []
    let totalSum = 0;

    for (let line of input) {
        let validFurniture = regex.exec(line);
        if (validFurniture !== null) {
            let item = validFurniture.groups.item;
            let price = validFurniture.groups.price;
            let quantity = validFurniture.groups.quantity;
            bought.push(item);
            totalSum += (price * quantity);
        }
    }

    console.log(`Bought furniture:`);
    bought.forEach(e => console.log(e));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);