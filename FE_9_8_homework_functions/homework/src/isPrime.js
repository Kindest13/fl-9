// Task #4
function isPrime(val) {
	for(let i = 2;i < val;i++) {
		if(val % i === 0) {
			return false;
		}
	}
	return val !== 1;
}