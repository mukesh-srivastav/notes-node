var square = x => x * x;

console.log(square(9));

var user = {
	name : 'Mukesh',
	sayHi : () => {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},

	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHi(1,2,2,2,3,4);
user.sayHiAlt(1,2,3,3,4,4,5);