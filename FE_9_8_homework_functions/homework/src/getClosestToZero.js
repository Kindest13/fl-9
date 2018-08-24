// Task #5 'solving's very similiar to task #3'
function getClosestToZero() {
	let closestNumber = Math.abs(arguments[0]);
	for(let i = 1;i < arguments.length;i++) {
		if(closestNumber > Math.abs(arguments[i])) {
			closestNumber = arguments[i];
		}
	}
	return closestNumber;
}