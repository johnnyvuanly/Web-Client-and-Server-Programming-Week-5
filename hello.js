console.log('Hello World!')

// Three wats to create variables

let color = 'blue'
var size = 'medium'
const language = 'JavaScript'

let quantity = 5
let distance = 4.5

let text = 'hello world'
let message = 'Hi Programmers'

let todayTemp = 75

console.log ('There are ' + quantity + ' programmers')

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5/9
// toFixed is how many decimal places
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
// Template string
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is ${todayTemp}F`)

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)