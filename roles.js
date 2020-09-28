// Creating nested objects

let user = {
    name: 'Johnny',
    password: 'zebra',
    email: 'zk5567bq@go.minnstate.edu',
    roles: ['Programmer', 'Front End Devloper'],
    contact: {
        office: 'M1234',
        telephone: '123-456-7890'
    }
}

// using code to add your salary to the object
user.salary= 1,000,000

// using code to add to the nested array within the object 
user.roles.push('Server Admin')

// using code to add to the nested object with the object
user.contact.location = 'Minneapolis'

console.log(user)