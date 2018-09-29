console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');



var res = notes.addNote();
console.log(res);

var sum = notes.add(8,-3);
console.log(sum);

// const userInfo = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${userInfo.username}. You are ${notes.age}`, function(err){
// 	if(err){
// 		console.log("Unable to write in greetings.txt");
// 	}
// });