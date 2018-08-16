const price=parseFloat(prompt('Amount of money: ', ''));
const discount=parseFloat(prompt('Your discount: ', ''));
let output;

function isValidNumber(num) {
	return !isNaN(num) && num>=0;
}

function rounding(num) {
	return Math.round(num*100)/100;
}

if(isValidNumber(price) && isValidNumber(discount) && discount<=100) {
	const d_price=price*(100-discount)/100;
	const saved=price-d_price;
	output='Price without discount: '+rounding(price)+'\n'+'Discount: '+rounding(discount)+'%'
	+'\n'+'Price with discount: '+rounding(d_price)+'\n'+'Saved: '+rounding(saved);
} else {
	output='Invalid data';
}
console.log(output);