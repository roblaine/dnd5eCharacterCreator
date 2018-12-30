// Node JS Experimentation and hacking file

const fs = require('fs');
const Cat = require('./cat');
var cat = new Cat();

console.log(cat.makeSound());

fs.readFile('./file.txt', 'utf-8', (err, data) => {
	if(err) { 
		throw err; 
	}
	console.log('data: ', data);
});

