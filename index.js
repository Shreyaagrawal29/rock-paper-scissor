let result = document.getElementById("result");

function Game(player) {
    let playerScoreresult = Number(document.getElementById("playerScore").innerText);
    let computerScoreresult = Number(document.getElementById("computerScore").innerText);
    let ps = document.getElementById("playerScore");
    let cs = document.getElementById("computerScore");
    let computerchoice = Math.random();

    if (computerchoice <= 0.33) {
        computer = "rock";
    }
    else if (computerchoice > 0.33 && computerchoice < 0.68) {
        computer = "paper";
    }
    else {
        computer = "scissors";
    }
    if (player == computer) {
        result.textContent = "It's a Draw!";
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        playerScoreresult++;
        ps.innerText = playerScoreresult;
        result.textContent = "You Win! 🎉";
    }
    else {
        computerScoreresult++;
        cs.innerText = computerScoreresult;
        result.textContent = "Computer Wins! 😢";
    }
}