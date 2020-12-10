/*

Out of the animals array:
	1. console.log all of the animals and types in the array
	2. console.log all of the animals in the array
	3. console.log all of the animals that are mammals
	4. console.log all of the animals that are fish or arachnids
	5. console.log all of the animals with an "o" in their name
	6. console.log all of the animals that have an "o" and a "g" and a "f" in their name
	7. create a new array that has only the mammals
*/

var animals = [
	{
		animal: "dog",
		type: "mammal"
	},
	{
		animal: "goldfish",
		type: "fish"
	},
	{
		animal: "spider",
		type: "arachnid"
	},
	{
		animal: "preying mantis",
		type: "insect"
	},
	{
		animal: "cat",
		type: "mammal"
	},
	{
		animal: "frog",
		type: "amphibian"
	},
	{
		animal: "giraffe",
		type: "mammal"
	}
]

console.log("this is the animal at index 3")
console.log(animals[3])

//1. console.log all of the animals and types in the array
// looping through the animals array
for(var i = 0; i < animals.length; i++){
	console.log("This here is the index " + i)
	console.log("Below Here is the object at index " + i)
	console.log(animals[i])
	console.log("Below Here is the animals type at index " + i)
	console.log(animals[i].type)
}

//	3. console.log all of the animals that are mammals
// looping through the animals array
for(var i = 0; i < animals.length; i++){
	if(animals[i].type == "mammal"){
		console.log("this animal is a mammal")
		console.log(animals[i])
	}
}

// 	4. console.log all of the animals that are fish or arachnids
// looping through the animals array
for(var i = 0; i < animals.length; i++){
	if(animals[i].type == "fish" || animals[i].type == "arachnid"){
		console.log("this animal is either a fish or an arachnid");
		console.log(animals[i])
	}
}

// 	5. console.log all of the animals that have an "o" and a "g" in their name
for(var i = 0; i < animals.length; i++){
	if(animals[i].animal.indexOf("o") != -1 && animals[i].animal.indexOf("g") != -1){
		console.log("this animal has an 'o' and a 'g' in its name");
		console.log(animals[i])
	}
}

// 	6. console.log all of the animals with an "o" in their name
// looping through the animals array
for(var i = 0; i < animals.length; i++){
	if(animals[i].animal.indexOf("o") != -1){
		console.log("this animal has an 'o' in its name");
		console.log(animals[i])
	}
}

// 	7. create a new array that has only the mammals
var mammals = [];
// looping through the animals array
for(var i = 0; i < animals.length; i++){
	if(animals[i].type == "mammal"){
		console.log("this animal is a mammal")
		mammals.push(animals[i])
	}
}
// var mammals = animals.filter((animal) => animal.type == "mammal")

console.log("This is the mammals array")
console.log(mammals)
