// import random class

const inputElement = document.getElementById("input");
const button = document.getElementById("button")

let answer = document.getElementById("guessANumber");


var randomNum = Math.floor((Math.random() * 10) + 1)
console.log(randomNum);

//function to check if the answer matches the guess
function checkGuess() {
    let guess = inputElement.value;

// if the number=guess it will be right
    if (randomNum == guess)
    {
        answer.innerText = "You're right, good job!"
        content.style.color = "red"
    } 
    else if (guess > randomNum)
    {
        answer.innerText = "Your number is too high"
    }
    else
    {
        answer.innerText = "Your number is too low"
    }
}

button.addEventListener("click", checkGuess)