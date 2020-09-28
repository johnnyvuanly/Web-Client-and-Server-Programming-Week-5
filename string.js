let text = 'The classes are itec 1150, itec 1250, itec 2560'

// Only replaces the first instance of itec
let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

// This will replace all instance of itec and make it what you want
// g means global, globally replace it, replace every  instance
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'
// find every 4 digit number in the string and replace it with ITEC and then the 4 digits
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)
