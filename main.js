$(document).ready(function () {




    const suits = ['S', 'H', 'D', 'C']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let deck = new Array()
    let players = new Array()
    let currentPlayer = 0
    let newDeck = []


    function createDeck() {

        deck = new Array()
        for (let i = 0; i < values.length; i++) {

            for (let a = 0; a < suits.length; a++) {

                let weight = parseInt(values[i]);

                if (values[i] == 'J' || values[i] == 'Q' || values[i] == 'K')

                    weight = 10

                if (values[i] == 'A')

                    weight = 11

                const card = { value: values[i], suit: suits[a], weight: weight }
                deck.push(card)
            }
        }
        console.log(deck)
        return deck
    }
    createDeck()

    function createPlayers() {

        players = []
        let playerOne = prompt('What is your name?')
        $('.player1').append( '>' + playerOne + '<')
        console.log(playerOne)
        const playerTwo = 'Dealer'
        console.log(playerTwo)
        players.push(playerOne, playerTwo)
        console.log(players)

    }
    createPlayers()

    function shuffleDeck() {
        for (let i = 0; i < deck.length; i++) {
            let shuffle = newDeck.push(deck[Math.floor(Math.random() * 52)])
            console.log(newDeck)
        }

    }


    shuffleDeck()


    $('#Deal').on('click', function () {
        

            let playerOneHand = []
            let dealerHand = []
            
            for (let i = 0; i < 2; i++) {
                let playerHandResult = playerOneHand.push(newDeck.shift())
                console.log(playerOneHand)
                let dealerHandResult = dealerHand.push(newDeck.shift())
                
                
                console.log(dealerHand)

            }
            document.getElementById('dOne').src = `img/${dealerHand[0].value}${dealerHand[0].suit}.png`;
            document.getElementById('dTwo').src = `img/${dealerHand[1].value}${dealerHand[1].suit}.png`;
            

            let playerTotal = playerOneHand[0].weight + playerOneHand[1].weight
            console.log(playerTotal)
            let dealerTotal = dealerHand[0].weight + dealerHand[1].weight
            if (dealerTotal < 17) {
                dealerHand.push(newDeck.shift())
                let sum = dealerTotal + dealerHand[2].weight
                if (sum > 21) {
                    console.log('Dealer Busts!')
                }
                console.log(sum)
            } else if (dealerTotal = 21) {
                console.log('21 Dealer makes BlackJack')

            } else {
                console.log(dealerTotal)
            }
            if (playerTotal < 21) {
                $('#hit').on('click', function () {
                    playerOneHand.push(newDeck.shift())
                    console.log(playerOneHand)
                    let playerSum = playerTotal + playerOneHand[2].weight
                    console.log(playerSum)

                    if (playerSum > 21) {
                        console.log('You Busted!')
                    } else if (playerSum == 21) {
                        console.log('21 You Win!')
                    }

                })

            } else if (playerTotal = 21) {
                console.log('21 BlackJack! You win!')
            } else if (playerTotal > 21) {
                console.log('You Busted!')

            }
            $('#stay').on('click', function () {
                if (playerTotal > dealerTotal) {
                    console.log('You win!')

                } else if (playerTotal < dealerTotal) {
                    console.log('You lose!')
                }

            })



        



    });














});