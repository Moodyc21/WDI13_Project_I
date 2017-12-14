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
        $('.player1').append('>' + playerOne + '<')
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
        document.getElementById('pOne').src = `img/${playerOneHand[0].value}${playerOneHand[0].suit}.png`;
        document.getElementById('pTwo').src = `img/${playerOneHand[1].value}${playerOneHand[1].suit}.png`;


        let playerTotal = playerOneHand[0].weight + playerOneHand[1].weight
        $('.playerScore').append(playerTotal)
        console.log(playerTotal)

        let dealerTotal = dealerHand[0].weight + dealerHand[1].weight
        $('.dealerScore').append(dealerTotal)
        console.log(dealerTotal)


        if (playerTotal < 21) {
            $('#hit').on('click', function () {
                playerOneHand.push(newDeck.shift())
                $('.contain').append(`<img id='pThree' src='img/${playerOneHand[2].value}${playerOneHand[2].suit}.png' alt='3rd Card'>`)
                console.log(playerOneHand)
                let playerSum = playerTotal + playerOneHand[2].weight
                $('.playerScore').text(playerSum)

                console.log(playerSum)

                if (playerSum > 21) {
                    $('.status').append('You Busted!')
                } else if (playerSum == 21) {
                    $('.status').append('21 You Win!')
                } else if (playerSum < 21) {
                    $('#hit').on('click', function () {
                        playerOneHand.push(newDeck.shift())
                        $('.contain').append(`<img id='pFour' src='img/${playerOneHand[3].value}${playerOneHand[3].suit}.png' alt='4th Card'>`)
                        console.log(playerOneHand)
                        let playerSum2 = playerSum + playerOneHand[3].weight
                        $('.playerScore').text(playerSum2)
                        return playerSum2

                    });
                }

            })

        } else if (playerTotal = 21) {
            $('.status').append('21 BlackJack! You win!')
        } else if (playerTotal > 21) {
            c$('.status').append('You Busted!')

        }
        setTimeout(function () {
            if (dealerTotal < 17) {
                dealerHand.push(newDeck.shift())
                $('.container').append(`<img id='dThree' src='img/${dealerHand[2].value}${dealerHand[2].suit}.png' alt='3rd card'>`)
                let sum = dealerTotal + dealerHand[2].weight
                $('.dealerScore').text(sum)
                if (sum > 21) {
                    $('.status').append('Dealer Busts!')
                } else if (sum == 21) {
                    $('.status').append('Dealer Makes BlackJack!')
                } else if (sum < 17) {
                    dealerHand.push(newDeck.shift())
                    $('.container').append(`<img id='dFour' src='img/${dealerHand[3].value}${dealerHand[3].suit}.png' alt='4th card'>`)
                    let sum2 = sum + dealerHand[3].weight
                    $('.dealerScore').text(sum2)
                }
            } else if (dealerTotal == 21) {
                $('.status').append('Dealer Makes BlackJack!')
            } else if (dealerTotal > 21) {
                $('.status').append('Dealer Busts!')
            }
        }, 7000);

        $('#stay').on('click', function () {
            let dScore = +$('.dealerScore').text()
            let pScore = +$('.playerScore').text()

            if (pScore > dScore) {
                $('.status').append('You win!')

            } else if (pScore < dScore) {
                $('.status').append('You lose!')
            } else if (pScore == dScore) {
                $('.status').append('Wash!')
            }

        })







    });














});