function randomize(player1, player2, player3, player4, player5) {
    let players = [player1, player2, player3, player4, player5];
    let avail = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
    let roles = [[], [], [], [], []];

    for (let i = 0; i < 5; i++) {  // for each round
        let roundRoles;
        let success = false;

        while (!success) {
            success = true;
            roundRoles = shuffle([1, 2, 3, 4, 5]);

            for (let j = 0; j < 5; j++) {  // for each player
                if (!avail[j].includes(roundRoles[j])) {
                    success = false;
                }
            }
        }

        for (let j = 0; j < 5; j++) {  // for each player
            roles[j][i] = roundRoles[j];

            let index = avail[j].indexOf(roundRoles[j]);
            if (index > -1) {
                avail[j].splice(index, 1);
            }
        }
    }

    let r1 = getTeam(players, roles, 1);
    let r2 = getTeam(players, roles, 2);
    let r3 = getTeam(players, roles, 3);
    let r4 = getTeam(players, roles, 4);
    let r5 = getTeam(players, roles, 5);

    let result = r1 + "\n" + r2 + "\n" + r3 + "\n" + r4 + "\n" + r5;

    return result;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getTeam(playersX, rolesX, round) {
    let main;
    let second;
    let healer;
    let collector;
    let defender;

    for (let i = 0; i < 5; i++) {
        let role = rolesX[i][round - 1];
        let player = playersX[i];

        if (role == 1) {
            main = player;
        } else if (role == 2) {
            second = player;
        } else if (role == 3) {
            healer = player;
        } else if (role == 4) {
            collector = player;
        } else {
            defender = player;
        }
    }

    return main + " / " + second + " / " + healer + " / " + collector + " / " + defender;
}