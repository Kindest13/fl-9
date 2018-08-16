const side_A=parseFloat(prompt('Input side A: ',''));
const side_B=parseFloat(prompt('Input side B: ',''));
const angle=parseFloat(prompt('Input angle: ',''));
const max_Angle=180;
const convert=Math.PI / max_Angle;
let output;

function isValidNumber(num) {
	return !isNaN(num) && num>=0;
}

function findSideC(side1,side2,ang) {
 return Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2)-2*side1*side2*Math.cos(ang*convert));
}

function findSquare(side1,side2,ang) {
 return side1*side2*Math.sin(ang*convert)/2;
}

function findPerimeter(side1,side2,side3) {
 return side1+side2+side3;
}

if(isValidNumber(side_A) && isValidNumber(side_B) && isValidNumber(angle) && angle<=max_Angle) {
	const side_C=findSideC(side_A,side_B,angle);
	const square=findSquare(side_A,side_B,angle);
	const perimeter=findPerimeter(side_A,side_B,side_C);
	output='c length: '+Math.round(side_C*100)/100+'\n'+'Triangle square: '+Math.round(square*100)/100+
		'\n'+'Triangle perimeter: '+Math.round(perimeter*100)/100+'\n';
} else {
	output='Invalid data';
}
console.log(output);