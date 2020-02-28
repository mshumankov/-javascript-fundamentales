function annapurna(input) {
    let listStore = {};

    function addStore(store, items) {
        if (listStore.hasOwnProperty(store)) {
            for (let item of items) {
                listStore[store].push(item);
            }

        } else {
            listStore[store] = [];
            for (let item of items) {
                listStore[store].push(item);
            }
        }
    }

    for (let line of input) {
        let splited = line.split('->');
        let command = splited.shift();

        if (command === "END") {
            break;
        } else if (command === 'Add') {
            let store = splited.shift();
            let items = splited[0].split(',');
            addStore(store, items);
        } else if (command === 'Remove') {
            let store = splited.shift();
            if (listStore.hasOwnProperty(store)) {
                delete listStore[store];
            }
        }
    }

    let sorted = Object.entries(listStore).sort((a, b) => {
        if (b[1].length === a[1].length) {
            return b[0].localeCompare(a[0]);
        }
        return b[1].length - a[1].length;
    })
    console.log(`Stores list:`);

    for (let store of sorted) {
        console.log(store[0]);

        for (let item of store[1]) {
            console.log(`<<${item}>>`);
        }
    }
}
annapurna(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]);