import readline from "readline"

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Basic Calculator!");

reader.question("Input the first number\n>", (number1) => {
    reader.question("Input the operator (choose one of the following: sum,  minus,  divison or multiplication\n>", (operator) => {
        reader.question("Input the second number\n>", (number2))
    })})


