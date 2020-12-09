/*

	open up your terminal
	type node -v to check if your node download is working
	navigate to this directory in your terminal
	type nodemon index.js to run this file

	All of this code below is running javascript from the server side
*/

//you can console.log on the terminal too
console.log('sup');

//variables
var jared = "Jared";
var parrot = "Parrot";

console.log(jared + " " + parrot);

//arrays
var people = [
	{
		name: 'Jared',
		gender: 'male'
	},
	{
		name: 'Jasmaine',
		gender: 'female'
	},{
		name: 'David',
		gender: 'male'
	},{
		name: 'Mikael',
		gender: 'female'
	}
]

var males = [];
var females = [];

for(var i = 0; i < people.length; i++){
	if(people[i].gender === "female"){
		console.log("people[i] female");
		console.log(people[i])
		females.push(people[i])
	} else {
		console.log("people[i] male");
		console.log(people[i])
		males.push(people[i])
	}
}

console.log("males object array");
console.log(males);
console.log("females object array");
console.log(females);

//and and or
for(var i = 0; i < people.length; i++){
	if(people[i].gender === "female" && people[i].name.charAt(0) == "M"){
		console.log("both a female and starts with the letter M");
		console.log(people[i])
	}

	if(people[i].gender === "male" || people[i].name.charAt(0) == "M"){
		console.log("either a male or starts with the letter M");
		console.log(people[i])
	}
}

for(var i = 0; i < males.length; i++){
	console.log("males[i] before transformation")
	console.log(males[i])
	males[i] = males[i].name.toUpperCase();
	console.log("males[i] after transformation")
	console.log(males[i])
}
console.log("Males to Uppercase")
console.log(males)

//while loops
var num = 0;
while(num < 10){
	console.log("number now is: " + num)
	num++
}

males.push("JOEY")
console.log("males array after adding JOEY")
console.log(males)

//array functions
console.log("indexOf JARED in males array: " + males.indexOf("JARED"))
console.log("indexOf DAVID in males array: " + males.indexOf("DAVID"))
console.log("indexOf JOEY in males array: " + males.indexOf("JOEY"))
console.log("indexOf VICTOR in males array: " + males.indexOf("VICTOR"))

console.log("males array joined by comma and a space: " + males.join(", "))

console.log("number of people in the males array: " + males.length)

//string manipulation
console.log("jared when split by the 'r'")
console.log(jared.split("r"))

for(var i = 0; i < people.length; i++){
	if(people[i].name.charAt(0) === "J"){
		console.log("if the character at 0 index of the persons name is 'J'")
		console.log(people[i])
	}
}

//functions
function addTwoStringsTogether(){
	console.log(jared + parrot);
}
console.log("the value that this function returns is:")
console.log(addTwoStringsTogether())
