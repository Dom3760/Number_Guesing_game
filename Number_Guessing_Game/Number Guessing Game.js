//declareing the value's of buttons
const inputElement = document.getElementById("input");
const button = document.getElementById("button")
let answer = document.getElementById("guessANumber");

//getting a random number between 1 and ten by getting a number between 0-1, multiplying by 10, rounding down, and adding 1
var randomNum = Math.floor((Math.random() * 10) + 1)
console.log(randomNum);

//function to check if the answer matches the guess
function checkGuess() {
    let guess = inputElement.value;

    // if the number=guess it will turn green and say you're right
    if (randomNum == guess)
    {
        answer.innerText = "You're right, good job!"
        answer.style.color = "green"
    } 
    // if the players guess is greater than the random number then it will say your number is too high and turn red
    else if (guess > randomNum)
    {
        answer.innerText = "Your number is too high"
        answer.style.color = "red"
    }
    // if the players guess is less than the random number then it will say your number is too low and turn red
    else
    {
        answer.innerText = "Your number is too low"
        answer.style.color = "red"
    }
}
// 
button.addEventListener("click", checkGuess)