function isMinnesotaZip(code) {
    if (code >= 55081 && code <= 56763) {
        return true
    } else {
        return false
    }
}

function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

/* Or you can write it this way 

function valid(gpa) {
    return gpa >= 0 && gpa <= 4
}

*/

function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)

// Works as a sting too '55403'
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55000))
console.log(isMinnesotaZip(9999999))
console.log(isMinnesotaZip(-1))

console.log(validGPA(5))
console.log(validGPA(3))