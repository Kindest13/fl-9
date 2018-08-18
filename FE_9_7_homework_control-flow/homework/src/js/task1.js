let log = prompt('Input ur login: ','');
let pass = 0;
let time = new Date().getHours();

if(log === null || log === '') {
	alert('Cancelled');
} else if (log.length < 4) {
	alert('I don\'t know any users having name length less than 4 symbols');
} else if(log === 'User') {
	pass = prompt('Input ur password: ','');
	if(pass === null || pass === '') {
	alert('Cancelled.');
	} else if(pass === 'SuperUser') {
		alert(time < 20 ? 'Good day!' : 'Good evening!');
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}