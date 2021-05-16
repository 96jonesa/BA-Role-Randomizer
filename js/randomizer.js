'use strict';
const HTML_PLAYER1 = "player1";
const HTML_PLAYER2 = "player2";
const HTML_PLAYER3 = "player3";
const HTML_PLAYER4 = "player4";
const HTML_PLAYER5 = "player5";
const HTML_ROLES1 = "roles1";
const HTML_ROLES2 = "roles2";
const HTML_ROLES3 = "roles3";
const HTML_ROLES4 = "roles4";
const HTML_ROLES5 = "roles5";

var player1;
var player2;
var player3;
var player4;
var player5;

var roles1;
var roles2;
var roles3;
var roles4;
var roles5;

var roles;

var players;

var randomizeButton;

function randomize() {
    player1 = document.getElementById(HTML_PLAYER1).value;
    player2 = document.getElementById(HTML_PLAYER2).value;
    player3 = document.getElementById(HTML_PLAYER3).value;
    player4 = document.getElementById(HTML_PLAYER4).value;
    player5 = document.getElementById(HTML_PLAYER5).value;

    players = [player1, player2, player3, player4, player5];

    roles1 = document.getElementById(HTML_ROLES1);
    roles2 = document.getElementById(HTML_ROLES2);
    roles3 = document.getElementById(HTML_ROLES3);
    roles4 = document.getElementById(HTML_ROLES4);
    roles5 = document.getElementById(HTML_ROLES5);

    let avail = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];

    roles = [[], [], [], [], []];

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

    roles1.innerHTML = getTeam(players, roles, 1);
    roles2.innerHTML = getTeam(players, roles, 2);
    roles3.innerHTML = getTeam(players, roles, 3);
    roles4.innerHTML = getTeam(players, roles, 4);
    roles5.innerHTML = getTeam(players, roles, 5);
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