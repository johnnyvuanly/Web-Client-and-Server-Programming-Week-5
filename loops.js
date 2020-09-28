let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds) // output: (3) ['Owl', 'Robin', 'Eagle']


// Pass an "arguement" inbetween the oarenthesis next to function 
birds.forEach( function(bird) {
    // This will repeat once for each object in array
    // Function will be called for each object in the array 
    console.log(bird) 
    // output: 
    // Owl
    // Robin
    // Eagle

})

// Another way to do this 
// Traditional for loop
// Loop counter lets you know where you are so x starts at the first item in array owl; 
// how many times do I want the loop to repeat; 
// how to count x
for (let x = 0; x < birds.length; x++) {
    // x lets you know where you are at 
    let bird = birds[x]
    console.log(bird)
    // output: 
    // Owl
    // Robin
    // Eagle
}