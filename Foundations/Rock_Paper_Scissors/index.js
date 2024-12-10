function getComputerChoice() {
		const choices = ['rock', 'paper', 'scissors'];
		const randomIndex = Math.floor(Math.random() * choices.length);
		return choices[randomIndex];
}
const com_r_p_s = getComputerChoice();
const user_output = prompt("rock, paper or scissors?");
if (user_output === com_r_p_s) {
	alert("It's a tie!");
} else if (user_output === 'rock' && com_r_p_s === 'scissors') {
	alert("You win!");
} else if (user_output === 'paper' && com_r_p_s === 'rock') {
	alert("You win!");
} else if (user_output === 'scissors' && com_r_p_s === 'paper') {
	alert("You win!");
} else {
	alert("You lose!");
}