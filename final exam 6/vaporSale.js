function vaporSale(input) {
    let tokens = input[0].split(', ');
    let gameList = {};

    for (let line of tokens) {
        if (line.includes('-')) {
            let [game, price] = line.split('-');
            price = Number(price);
            gameList[game] = [price];
        } else {
            let [game, dlc] = line.split(':');
            if (gameList.hasOwnProperty(game)) {
                gameList[game].push(dlc);
                gameList[game][0] = gameList[game][0] * 1.2
            }
        }
    }

    for (let prop in gameList) {
        let length = gameList[prop].length
        if (length === 2) {
            gameList[prop][0] = gameList[prop][0] / 2;
        } else {
            gameList[prop][0] -= (gameList[prop][0] * 0.2);
        }
    }

    let sortedDlc = Object.entries(gameList)
        .sort((a, b) => {
            return a[1][0] - b[1][0];
        })
        .forEach(el => {
            if (el[1].length > 1) {
                console.log(`${el[0]} - ${el[1][1]} - ${el[1][0].toFixed(2)}`);
            }
        });
    let sorted = Object.entries(gameList)
        .sort((a, b) => {
            return b[1][0] - a[1][0];
        })
        .forEach(el => {
            if (el[1].length === 1) {
                console.log(`${el[0]} - ${el[1][0].toFixed(2)}`);
            }
        });
}
vaporSale(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);