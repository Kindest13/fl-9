let price = parseFloat(prompt('Amount of money: ', ''));
let discount = parseFloat(prompt('Your discount: ', ''));
let output = 0;
let temp = 100; // variable for rounding and max percents

function isValidNumber(num) {
	return !isNaN(num) && num >= 0;
}

function rounding(num) {
	return Math.round(num * temp) / temp;
}

if(isValidNumber(price) && isValidNumber(discount) && discount <= temp) {
	let d_price = price * (temp - discount) / temp;
	let saved = price - d_price;
	output = 'Price without discount: ' + rounding(price) + '\n' + 'Discount: ' + rounding(discount) + '%'
	+ '\n' + 'Price with discount: ' + rounding(d_price) + '\n' + 'Saved: ' + rounding(saved);
} else {
	output = 'Invalid data';
}
console.log(output);