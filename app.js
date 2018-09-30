console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command :', command); 
console.log("Yargs : ", argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);

	if (note === undefined) {
		console.log('Could not add note');
	} else {
		console.log(`Note added :`);
		console.log(`___`);
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.note);
} else if (command === 'remove') {
	notes.removeNote(argv.note);
} else {
	console.log('Unknown command');
}