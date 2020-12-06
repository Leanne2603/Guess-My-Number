'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Correct Number!"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random()*20) + 1
// document.querySelector(".number").textContent = secretNumber

let score = 20
let highScore = 0

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const  guess = Number(document.querySelector('.guess').value)
    console.log(guess)

    // When there is no input
    if (!guess) {
        displayMessage("Oops! That is not a number. Try again!") 

    // When the guess is correct
    } else if (guess === secretNumber) {
        displayMessage("Congratulations! You got it! 😎😎")
        document.querySelector(".number").textContent = secretNumber
    
    // Checks to see if the score is higher than the highscore and updates accordingly
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    // Changes the background colour when the guess is correct
        document.querySelector('body').style.backgroundColor = '#990373'
        document.querySelector('.number').style.width = '60rem'
    // When an incorrect guess is given:
    } else if (guess !== secretNumber) {
        if (score > 1) {
        displayMessage(guess > secretNumber ? "Too high!" : "Too low!")
            score--
            document.querySelector('.score').textContent = score
            } else {
            displayMessage("☠ You have run out of guesses!")
            document.querySelector('.score').textContent = 0
        }
    }
    })

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#2d0363'
    document.querySelector('.number').style.width = '15rem'
})
