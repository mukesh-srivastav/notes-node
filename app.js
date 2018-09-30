const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
const bodyOptions =  {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'add a new note', {
		title: titleOptions, 
		body: bodyOptions
	})
	.command('list', 'List all the notes', {})
	.command('read', 'Read a note details', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;

const command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);

	if (note === undefined) {
		console.log('Could not add note');
	} else {
		console.log(`Note added :`);
		notes.logNote(note);
	}

} else if (command === 'list') {
	var allNotes = notes.getAll();

	console.log(`Printing ${allNotes.length} note(s) : `);

	allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
	var note = notes.getNote(argv.title);

	if (note === undefined) {
		console.log('Note not found');
	} else {
		console.log(`Note details :`);
		notes.logNote(note);
	}

} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note Removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Unknown command');
}


