// Task #2 there's a little error when we input equal values smth like (5,5) === true, when its not
function isSmaller(val1,val2) {
	return !isBigger(val1,val2);
}