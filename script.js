const greetUser = (name)=> `Hello ${name}`


const add = (num1, num2)=> num1 + num2

const reverse = (string) => string.split('').reverse().join('')
module.exports = {
    greetUser,
    add,
    reverse
}