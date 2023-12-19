const num1 = 5;
const num2 = 6;
const sum = num1 + num2;

console.log(num1 + ' + ' + num2 + ' = ' + sum);

// OR

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))

// OR

function sumNumbers(num1, num2) {
    return num1 + num2;
}
  
console.log(num1 + ' + ' + num2 + ' = ' + sumNumbers(num1, num2));