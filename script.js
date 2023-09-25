 var playerWins = 0;
 var computerWins = 0;
 var ties = 0;

 const buttonContainer = document.getElementById("button_container");
 const playerHand = document.getElementById("player_image")
 const computerHand = document.getElementById("computer_image")

 const playerWinsText = document.getElementById("playerWins");
 const computerWinsText = document.getElementById("computerWins");
 const tiesText = document.getElementById("ties");
 const totalText = document.getElementById("total");

 const playerIcon = document.getElementById("player_icon");
 // Function to generate the computer's choice
 function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function reset(){
    playerHand.classList.add("hidden")
    computerHand.classList.add("hidden")
    playerHand.classList.remove("winAnim")
    computerHand.classList.remove("winAnim")
    playerHand.classList.remove("loseAnim")
    computerHand.classList.remove("loseAnim")
    playerIcon.classList.remove("win");
    playerIcon.classList.remove("lose");
    playerIcon.classList.remove("tie");
}
// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
    reset()
    console.log("Start");

    setTimeout(function () {
    console.log("Waited for 1 second");
    }, 10000); // 1000 milliseconds = 1 second

    console.log("End");
    playerHand.classList.remove("hidden")
    computerHand.classList.remove("hidden")
    if (playerSelection === computerSelection) {
        tiesText.innerText = ++ties;
        playerIcon.classList.add("tie");
        return "Döntetlen!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWinsText.innerText = ++playerWins
        playerHand.classList.add("winAnim");
        computerHand.classList.add("loseAnim");
        playerIcon.classList.add("win");
        return `Nyertél!`;
    } else {
        computerWinsText.innerText = ++computerWins;
        playerHand.classList.add("loseAnim");
        computerHand.classList.add("winAnim");
        playerIcon.classList.add("lose");
        return `Vesztettél!`;
    }
}

const buttons =  document.querySelectorAll("#button_container button");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        playerHand.setAttribute("src","./Images/"+playerSelection+".svg");
        computerHand.setAttribute("src","./Images/"+computerSelection+".svg");
        const result = playRound(playerSelection, computerSelection);
        resultDiv.textContent = result;
        totalText.innerText = playerWins + computerWins+ties;
    });
});