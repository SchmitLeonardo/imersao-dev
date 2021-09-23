
// Array with all players
var players = [];

// Initial display
displayPlayers(players);

/**
 * Calc player's points
 * 
 * @param {*} player 
 * @returns 
 */
function calcPoints(player) {
    var points = player.victories * 3 + player.draws;
    return points;
}

/**
 * Display players
 * 
 * @param {*} players 
 */
function displayPlayers(players) {
    var element = "";
    for (let i = 0; i < players.length; i++) {
        element += "<tr><td>" + players[i].name + "</td>"
        element += "<td>" + players[i].victories + "</td>"
        element += "<td>" + players[i].draws + "</td>"
        element += "<td>" + players[i].defeats + "</td>"
        element += "<td>" + players[i].points + "</td>"
        element += "<td><button class='btn' onClick='addVictories(" + i + ")'>Vitória</button></td>"
        element += "<td><button class='btn' onClick='addDraws(" + i + ")'>Empate</button></td>"
        element += "<td><button class='btn' onClick='addDefeats(" + i + ")'>Derrota</button></td></tr>"
    }
    document.getElementById('playersTable').innerHTML = element;
}

/**
 * Add victories to player
 * 
 * @param {*} index 
 */
function addVictories(index) {
    players[index].victories++;
    players[index].points = calcPoints(players[index]);
    displayPlayers(players);
}

/**
 * Add Draws to player
 * 
 * @param {*} index 
 */
function addDraws(index) {
    players[index].draws++;
    players[index].points = calcPoints(players[index]);
    displayPlayers(players);
}

/**
 * Add Defeats to player
 * 
 * @param {*} index 
 */
function addDefeats(index) {
    players[index].defeats++;
    displayPlayers(players);
}

/**
 * Add player to array
 * 
 */
function addPlayer() {
    var name = document.getElementById('playerName').value;
    if (name) {
        players.push({name: name, victories: 0, draws: 0, defeats: 0, points: 0});
        displayPlayers(players);
        document.getElementById('alert-correct').style.display = "block";
        document.getElementById('playerName').style.borderColor = "#fff";
        document.getElementById('playerName').value = "";
        setTimeout(function () {
            document.getElementById('alert-correct').style.display = 'none'
            enableButton();
        }, 3000)
    } else {
        document.getElementById('alert-error').style.display = "block";
        document.getElementById('playerName').style.borderColor = "#da1e26";
        setTimeout(function () {
            document.getElementById('alert-error').style.display = 'none'
            enableButton();
        }, 3000)
    }
}
