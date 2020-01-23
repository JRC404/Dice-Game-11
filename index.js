// logic first
// html and css second.

// attempt to create a random number variable between 1 & 6

// if you roll a one, you lose
// if you score 21 or higher... you win...
// anything else... carry on...


// html element declarations
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
// consts go here

diceImage.style.visibility = "hidden";

let numberRolled;
let pointScored = 0;

// function declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6); // DECLARED and defined inside of the scope
    console.log(`I am the numberRolled variable: ${numberRolled}`)
}

const winOrLose = () => {
    // numberRolled = 2;
    // pointScored = 18;
    // scoreAddition()
    if(numberRolled == 1) {
        console.log("Ha. You lose.");
        pointScored = 0;
    }
    else if (pointScored > 20) {
        console.log("How did you win? Did you cheat?");
        pointScored = 0; 
    }
    else {
        console.log("Oh, carry on then.")
    }
    scoreAddition()
}

const scoreAddition = () => {
    diceRoll()
    pointScored += numberRolled;
    console.log(`My total score is: ${pointScored}`);   
}

rollButton.addEventListener("click", () => {
    diceRoll()
    playerScore.textContent = numberRolled
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`
    console.log("This button works.");
})



// winOrLose()
// winOrLose()
// diceRoll()


