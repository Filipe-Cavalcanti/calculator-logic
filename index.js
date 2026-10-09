import { createInterface } from "readline"
import { addition, subtraction, multiplication, divison } from "./src/operations/operations.js"

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the very Basic Calculator!");

reader.question("Input the first number\n>", (number1) => {
    reader.question("Input the operator (choose one of the following:\n + for addition\n - for subtraction\n / for divison\n * for multiplication)\n>", (operator) => {
        reader.question("Input the second number:\n>", (number2) => {
            if ( typeof(number1) != Number || typeof(number2) != Number ) {
                console.log("Error: please insert valid numbers")                
                return reader.close();
            } 

            const num1 = Number(number1);
            const num2 = Number(number2);

            let result = null;

            if (operator == "+") {
                result = addition(num1, num2);
            } else if (operator == "-") {
                result = subtraction(num1, num2);
            } else if (operator == "*") {
                result = multiplication(num1, num2);
            } else if (operator == "/") {
                result = divison(num1, num2);
            } else { 
                console.log("Error: Please insert one of the following valid operators: + for addition, - for substraction, / for division or * for multiplication")
                return reader.close();
            }
            console.log(`The result is ${result}`);
            reader.close();
        })
    })
})
