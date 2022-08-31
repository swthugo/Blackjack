// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let player = {
    name: "Player",
    chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1

    if (randomNumber > 10) {
        return 10
    }else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    // cards[0] = getRandomCard()
    // cards[1] = getRandomCard()
    // console.log(cards.length)
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        // console.log(cards)
        renderGame()        
    }
}


// *********************************************
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 21

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if (age < 21){
//     console.log("You can not enter the club!")
// }else{
//     console.log("Welcome!")
// }

// *********************************************

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age < 100){
//     console.log('Not elegible')
// }else if (age === 100){
//     console.log('Here is your birhtday card from the King!')
// }else {
//     console.log('Notelegible, you have already gotten one')
// }

// *********************************************
// Arrays - ordered lists of items

// 0 indexed
// let featuredPosts = [
//     "Check out my Netflix cline",
//     "Here's the code for my projects",
//     "I've just relaunched my portfolio"
// ]

// *********************************************
// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let me =["Hugo siu" , 24, true]

// *********************************************
// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// message.pop()
// console.log(messages)

// *********************************************

// let player1Time = 102
// let player2Time = 107

// cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

// *********************************************

// let randomNumber = Math.floor(Math.random()*13) + 1
// console.log(randomNumber)

// *********************************************

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let trips = []
// trips[0] = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/caste2.png"]
// }
// *********************************************
