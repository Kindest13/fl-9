let sum = 0; // sum of prizes
let multy = {r_Factor:1,p_Factor:1} // multipliers for range/prize
let max = 5;

function randomNumber(max) {
    return Math.floor(Math.random() * ++max);
  }

function game(r_Factor,p_Factor) {
	let prize = 10;
	let attempt = 3;
	let rand_Number = randomNumber(max*r_Factor);
	while(attempt>0) { // cycle for 3 attempts
		alert(rand_Number);
		let num = +prompt('Enter a number from [' + 0 + ',' + max*r_Factor + ']' + '\nAttempts left: ' +
		attempt + '\nTotal prize: ' + sum + '\nPossible prize on current attempt: ' + Math.floor(prize*p_Factor),'');
		if(num === rand_Number) { // if user guessed
			prize *= p_Factor;
			alert('Congratulation!   Your prize is: ' + Math.floor(prize));
			sum += prize;
			sum = Math.floor(sum);
			if(confirm('You want to continue?')) {
				r_Factor *= 2; // Multiplying for next game range
				p_Factor *= 3; // Multiplying for next game prize
				return game(r_Factor,p_Factor) 
			} else {
				break;
			}
		}
		prize /= 2; // dividing price for next attempt
		attempt--;
	}
	alert('Thank you for a game. Your prize is: ' + sum);
	if(!sum) {
		alert('You did not become a millionaire, but can.');
		if(confirm('Do you want to play again?')) {
		return game(r_Factor,p_Factor);
	} else {
		alert('You did not become a millionaire, but can.');
	}
	}
}

//main
if(confirm('Do you want to play a game?')) {
	game(multy.r_Factor,multy.p_Factor);
} else {
		alert('You did not become a millionaire, but can.');
}