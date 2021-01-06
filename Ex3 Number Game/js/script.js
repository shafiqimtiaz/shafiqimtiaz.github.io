let low = 1;
let high = 10;

// random value generated 
function getRandom(low, high) {
    min = Math.ceil(low);
    max = Math.floor(high);

    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randValue = getRandom(low, high);
let guess = 1;

// counting the number of guesses made for correct Guess 
document.getElementById("submitguess").onclick = function () {
    // number guessed by user     
    // let input = document.getElementById("guessField").value;
    for (let i = 0; i <= 3; i++) {
        if (i == 3) {
            alert("YOU LOSE :(\nCorrect answer was " + randValue);
            break;
        } else {
            let input = prompt("Enter Guess:");
            if (input == randValue) {
                alert("CONGRATULATIONS, YOU WIN !!!\nATTEMPT: " + guess);
                break;
            }
            else if (input > randValue) {
                guess++;
                alert("Correct answer is smaller! " + randValue);
            }
            else {
                guess++;
                alert("Correct answer is greater! " + randValue);
            }
        }
    }
    location.reload();
}