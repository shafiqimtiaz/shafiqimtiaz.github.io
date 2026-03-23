let low = 1;
let high = 10;

function getRandom(low, high) {
    min = Math.ceil(low);
    max = Math.floor(high);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randValue = getRandom(low, high);
let guess = 1;

document.getElementById("submitguess").onclick = function () {
    for (let i = 0; i <= 3; i++) {
        if (i == 3) {
            alert("YOU LOSE :(\nCorrect answer was " + randValue);
            break;
        } else {
            let input = prompt("Enter Guess:");

            if (isNaN(input)) {
                alert("Please Enter a Number !!");
            }
            else {

                if (input == randValue) {
                    alert("CONGRATULATIONS, YOU WIN !!!\nATTEMPT: " + guess);
                    break;
                }
                else if (input > randValue) {
                    guess++;
                    alert("Correct answer is smaller!");
                }
                else {
                    guess++;
                    alert("Correct answer is greater!");
                }

            }

        }
    }
    location.reload();
}
