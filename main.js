$(document).ready(function(){




const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = new Array()
let players = new Array()
let currentPlayer = 0


function createDeck() {

    deck = new Array()
    for(let i = 0; i < values.length; i++){
        
        for(let a = 0; a < suits.length; a++){
           
            let cardValue = parseInt(value[i]);
           
            if(values[i] == 'J' || values[i] == 'Q' || values[i] == 'K')
           
            cardValue = 10

            if(values[i] == 'A')

            cardValue = 11

            const card = {Value: values[i], Suit: suits[a], Weight: weight}
            deck.push(card)
        }
    }

}

function createPlayers() {

    players = new Array()
    let playerOne = prompt('What is your name?')
    console.log(playerOne)
    const playerTwo = 'Dealer'
    console.log(playerTwo)
    players.push(playerOne, playerTwo)
    console.log(players)

}
createPlayers()

function playerUI() {
    $('.player').innerHTML = ''
    for(let i = 0; i < players.length; i++){
        let playerDiv =  document.createElement('div')
        let playerDivId = document.createElement('div')
        let handDiv = document.createElement('div')
        let pointsDiv = document.createElement('div')

        pointsDiv.classname = 'points'
        pointsDiv.id = 'points_' + i
        playerDiv.id = 'player_' + i
        playerDiv.classname = 'player'
        handDiv.id = 'hand_' + i

        playerDivId.innerHTML = players[i].ID
        playerDiv.appendChild(playerDivId)
        playerDiv.appendChild(handDiv)
        playerDiv.appendChild(pointsDiv)
        $('.players').appendChild(playerDiv)


    }
}

function shuffleDeck () {
    for( let i = 0; i < 500; i++) {
        let stateOne = Math.floor(Math.random() * deck.length)
        let stateTwo = Math.floor(Math.random() * deck.length)
        let tmp = deck[stateOne]
    }
}

function init() {
    currentPlayer = 0
    createDeck()
    shuffle()
    createPlayers()
    playerUI()
    dealHands()
    $('#player_' + currentplayer).classlist.add('active')    

}





});


