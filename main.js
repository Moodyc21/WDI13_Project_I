$(document).ready(function(){




const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let deck = new Array()
let players = new Array()
let currentPlayer = 0


function createDeck() {

    deck = new Array()
    for(let i = 0; i < values.length; i++){
        
        for(let x = 0; x < suits.length; x++){
           
            let cardValue = parseInt(value[i]);
           
            if(values[i] == 'J' || values[i] == 'Q' || values[i] == 'K')
           
            cardValue = 10

            if(values[i] == 'A')

            cardValue = 11

            const card = {Value: values[i], Suit: suits[x], Weight: weight}
            deck.push(card)
        }
    }

}








});


