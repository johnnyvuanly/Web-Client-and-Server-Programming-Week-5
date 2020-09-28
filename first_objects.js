// [] = arrays
// {} = objects
let user = { username: 'Johnny', password: 'zebra'}

console.log(user.username)
console.log(user['username'])

// Same for password
console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

// changing the password value
user.password = 'elephant'
console.log(user)

// Adding name of email and a value of zk5567bq@go.minnstate.edu
user.email = 'zk5567bq@go.minnstate.edu'
console.log(user)
console.log(user.email)

