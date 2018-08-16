let side_A = parseFloat(prompt('Input side A: ',''));
let side_B = parseFloat(prompt('Input side B: ',''));
let angle = parseFloat(prompt('Input angle: ',''));
let max_Angle = 180;
let convert = Math.PI / max_Angle;
let output = 0;

function isValidNumber(num) {
	return !isNaN(num) && num >= 0;
}

function rounding(num) {
	return Math.round(num * 100) / 100;
}

function findSideC(side1,side2,ang) {
	return Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2) - 2 * side1 * side2 * Math.cos(ang * convert));
}

function findSquare(side1,side2,ang) {
	return side1 * side2 * Math.sin(ang * convert) / 2;
}

function findPerimeter(side1,side2,side3) {
	return side1 + side2 + side3;
}

if(isValidNumber(side_A) && isValidNumber(side_B) && isValidNumber(angle) && angle <= max_Angle) {
	let side_C = findSideC(side_A,side_B,angle);
	let square = findSquare(side_A,side_B,angle);
	let perimeter = findPerimeter(side_A,side_B,side_C);
	output = 'c length: ' + rounding(side_C) + '\n' + 'Triangle square: ' + rounding(square) +
	'\n' + 'Triangle perimeter: ' + rounding(perimeter) + '\n';
} else {
	output = 'Invalid data';
}
console.log(output);