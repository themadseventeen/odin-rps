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

function main() {
    let score_h = 0 , score_c = 0;
    let round = 0;

    let tmp = "";
    while (round < 5) {
        tmp = "";
        const h_choice = getHumanChoice();
        const c_choice = getComputerChoice();
        const eval = score(h_choice, c_choice);
        tmp += h_choice + " " + c_choice + " " + eval;
        if (eval == 1) score_h++;
        if (eval == -1) score_c++;
        round++;
        console.log(tmp);
    }
    console.log(score_h);
    console.log(score_c);
    if (score_h == score_c) console.log("Tie!");
    if (score_h > score_c)  console.log("You win!");
    else console.log("You lose!");
}

main()