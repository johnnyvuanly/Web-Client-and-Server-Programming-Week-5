let animals = ['lion', 'tiger', 'cheetah']

// console.log(animals) // ['lion', 'tiger', 'cheetah']
console.log(animals[1]) // tiger
console.log(animals[1000]) // undefined

// Adding elements to array
animals[6] = 'giraffe'
// console.log(animals)
console.log(animals[5])

// Assigning elements to the array
animals[1] = 'zebra'
console.log(animals[1])

// JavaScript method push adds to the end of the array
animals.push('elephants')
// console.log(animals)

// JavaScript method unshift adds to the beggining of the array
animals.unshift('deer')
// console.log(animals)

// Remove data from the beginning of the array 
// animals.shift()
let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)

// Remove data from the end of an array 
// animals.pop()
// If you do want to keep the item in the array then set it to a variable
let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)

// Reverses order of the array 
animals.reverse()
console.log(animals)

// Sorts in alphabetical order
animals.sort()
console.log(animals)

// How many items in array
let numberOfAnimals = animals.length
console.log(numberOfAnimals)

// Check to see if something is in the array 
// If something is not in the array then it will return -1 weird?
console.log(animals.indexOf('walrus'))

// Then you would use a condition
if (animals.indexOf('walrus') == -1) {
    console.log('Walrus was not found in the array')
}

// Another way to check if something is in the array 
// Returns a boolean true of false
if (animals.includes('cheetah')) {
    console.log('Cheetah is in the array')
}

// join connects everything together with a string
// with no arguement in join then it returns the default a comma
console.log(animals.join())
// to change the character that joins everything together
// console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})

// Use a loop with your animals array to print the length of each animal name
animals.forEach(function(animal) {
    console.log(animal.length)
})

// Make a new array with lengths of each animal name
// Example ['cheetah', 'giraffe', 'lion', 'zebra']
// Create an array [7, 7, 4, 5]

let animalNameLength = []
animals.forEach( function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)