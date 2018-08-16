const price=+prompt('Amount of money: ', '');
const discount=+prompt('Your discount: ', '');
let output;

function isValidNumber(num) {
	return !isNaN(num) && num>=0;
}

if(isValidNumber(price) && isValidNumber(discount) && discount<=100) {
	const d_price=price*(100-discount)/100;
	const saved=price-d_price;
	output='Price without discount: '+Math.round(price*100)/100+'\n'+'Discount: '+discount+'%'
	+'\n'+'Price with discount: '+d_price+'\n'+'Saved: '+Math.round(saved*100)/100;
} else {
	output='Invalid data';
}
console.log(output);