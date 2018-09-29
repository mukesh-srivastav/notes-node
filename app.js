console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


var filteredArray = _.uniq(['a', "A", "a", 1, 'Mukesh', "Mukesh", "mukesh"]);
console.log(filteredArray);


// console.log(_.isString("pp"));
// console.log(_.isString(true));
// console.log(_.isString(1));
// console.log(_.isString('1'));


// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(8,-3);
// console.log(sum);

// const userInfo = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${userInfo.username}. You are ${notes.age}`, function(err){
// 	if(err){
// 		console.log("Unable to write in greetings.txt");
// 	}
// });