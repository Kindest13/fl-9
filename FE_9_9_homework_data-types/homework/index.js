const MagicNumbers = {
	two: 2,
	five: 5,
	eight: 8,
	three: 3
};
// Task #1
function findType(param) {
	return typeof param;
}
// Task #2
function forEach(mas, output) {
	for(let i = 0;i < mas.length;i++) {
		output(mas[i]);
	}
}
// Task #3
function map(mas, output) {
	const newMas = [];
	forEach(mas, function(el) {
 newMas.push(output(el)) 
});
}
map([MagicNumbers.two, MagicNumbers.five, MagicNumbers.eight], function(el) {
 return el + MagicNumbers.three; 
});
// Task #4
function filter(mas, func) {
	const filteredArray = [];
	forEach(mas, function(el) {
if(func(el)) {
filteredArray.push(el)
} 
});
}
// Task #5

let array = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 17,
    'eyeColor': 'green',
    'name': 'Weiss',
    'favoriteFruit': 'banana'
  }
];

function getAdultAppleLovers(data) {
	map(filter(data, function(el) {
 return el.age >= 18 && el.favoriteFruit === 'apple' 
}),
		function(el) {
 return el.name 
});
}
// Task #6
function keys(keys) {
let newArray = [];
for(let prop in keys) {
	if(keys.hasOwnProperty(prop)) {
		newArray.push(prop);
	}
}
return newArray;
}
// Task #7
function values(obj) {
let newArray = [];
for(let value in obj) {
	if(obj.hasOwnProperty(value)) {
		newArray.push(obj[value]);
	}
}
return newArray;
}
// Task #8
function showFormattedDate(date) {
	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
