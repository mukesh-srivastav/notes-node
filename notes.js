console.log("Starting notes.js");
// console.log(module);

module.exports.age = 25; 

module.exports.addNote = () => {
	console.log("Add note");
	return 'New note';
};

module.exports.add = (a,b) => {
	return a+b;
};