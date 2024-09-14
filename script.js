function getComputerChoice() {
    const rand = Math.random();
    if (rand <= 0.3333) return "rock";
    if (rand <= 0.6666) return "paper";
    return "scissors";
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = "";
    while (choice == null || !choices.includes(choice)) {
        choice = prompt("Choose! (rock, paper or scissors)");
        if (choice == null)
            continue;
        choice = choice.toLowerCase();
    }
    return choice;
}

function score(h_choice, c_choice) {
    if (h_choice == c_choice)
        return 0;
    if (h_choice == "paper" && c_choice == "rock") return 1;
    if (h_choice == "paper" && c_choice == "scissors") return -1;
    if (h_choice == "rock" && c_choice == "paper") return -1;
    if (h_choice == "rock" && c_choice == "scissors") return 1;
    if (h_choice == "scissors" && c_choice == "rock") return -1;
    if (h_choice == "scissors" && c_choice == "paper") return 1;

}

let score_h = 0, score_c = 0;
let round = 0;

function play(humanChoice) {
    const h_choice = humanChoice;
    const c_choice = getComputerChoice();
    const eval = score(h_choice, c_choice);

    if (eval == 1) score_h++;
    if (eval == -1) score_c++;

    let element_hscore = document.querySelector(".hscore span");
    let element_cscore = document.querySelector(".cscore span");

    element_hscore.textContent = score_h;
    element_cscore.textContent = score_c;

    if (score_c >= 5 || score_h >= 5) {
        let message_box = document.querySelector(".message");
        if (score_h == score_c) message_box.textContent = "Tie!";
        if (score_h > score_c) message_box.textContent = "You win!";
        else message_box.textContent = "You lose!";
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }

}

// main()

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        play(button.textContent.toLowerCase());
    });
});