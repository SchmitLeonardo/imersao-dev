
var card1 = {
    name: 'Bulbasaur',
    atributes: {
        attack: 2,
        defence: 4,
        magic: 8
    }
}

var card2 = {
    name: 'Pikachu',
    atributes: {
        attack: 4,
        defence: 10,
        magic: 3
    }
}

var card3 = {
    name: 'Squirtle',
    atributes: {
        attack: 7,
        defence: 9,
        magic: 1
    }
}

var cards = [card1, card2, card3];

var enemy = "";
var player = "";

document.getElementById('btn-sort').disabled = false;
document.getElementById('btn-play').style.display = 'none';
document.getElementById("btn-sort").style.backgroundColor = '#edc298';

function sortCards() {
    var enemyNumber = sortRandomNumber();
    var playerNumber = sortRandomNumber();

    while (playerNumber == enemyNumber) {
        playerNumber = sortRandomNumber()
    }

    enemy = cards[enemyNumber];
    player = cards[playerNumber];


    document.getElementById('btn-sort').disabled = true;
    document.getElementById("btn-sort").style.backgroundColor = '#9e8065';
    document.getElementById('btn-play').style.display = 'block';
    document.getElementById("btn-play").style.backgroundColor = '#edc298';

    var atributes = "";
    for (let atribute in cards[playerNumber].atributes) {
        var options = atributes += "<div class='col-4'><input type='radio' name='atributo' value='" + atribute + "' ><label for='" + atribute + "'>" + atribute + "</label></div>";
        document.getElementById('options').innerHTML = options;
    }
    document.getElementById('options-title').style.display = 'block';
    document.getElementById('options').style.display = 'block';
}

function sortRandomNumber() {
    var randomNumber = Math.round(Math.random() * 2);
    return randomNumber;
}

function getAtribute() {
    var radioButtons = document.getElementsByName('atributo');
    var atribute = "";

    radioButtons.forEach(element => {
        if (element.checked == true) {
            atribute = element.value;
        }
    });

    return atribute;
}

function play() {
    var atribute = getAtribute();

    var valuePlayerCard = player.atributes[atribute];
    var valueEnemyCard = enemy.atributes[atribute];

    document.getElementById('result').style.display = 'block';
    var result = document.getElementById('result');

    if (valuePlayerCard > valueEnemyCard) {
        result.innerHTML = "<p>Parabéns! Você venceu!</p>"
    } else if (valuePlayerCard < valueEnemyCard) {
        result.innerHTML = "<p>Que Pena! Você perdeu!</p>"
    } else {
        result.innerHTML = "<p>Jogadores Empataram!</p>"
    }

    setTimeout(function () {
        result.style.display = 'none';
        document.getElementById('btn-sort').disabled = false;
        document.getElementById("btn-sort").style.backgroundColor = '#edc298';
    }, 2000)

    document.getElementById('options').innerHTML = "";
    document.getElementById('options-title').style.display = 'none';
    document.getElementById("btn-play").style.display = 'none';
}
