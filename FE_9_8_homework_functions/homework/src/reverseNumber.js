// Task #6
function reverseNumber(num) {
	let arr = '' + Math.abs(num);
	arr = arr.split('').reverse().join('');
	return num < 0 ? -arr : +arr;
}