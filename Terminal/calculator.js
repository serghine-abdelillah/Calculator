const prompt = require("prompt-sync")();

function add(a, b) {
  return a + b;
}
function Subtract(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  return a / b;
}

console.log("MENU");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");
console.log("5. Quit");

var choice = prompt("Enter your choice: ");
while (choice != 5) {
  
  if (choice == `1` || choice == `2` || choice == `3` || choice == `4`) {
    var choice = prompt("You can change the choice, Enter your choice: ");
    console.log("Enter two numbers : ");
    const num1 = prompt("Enter the first number : ");
    const num2 = prompt("Enter the second numbers : ");

    if (choice == `1`) {
      console.log(`the sum is ${add(parseInt(num1), parseInt(num2))}`);
    } else if (choice == `2`) {
      console.log(
        `the Subtraction is ${Subtract(parseInt(num1), parseInt(num2))}`
      );
    } else if (choice == `3`) {
      console.log(
        `the Multiply is ${Multiply(parseInt(num1), parseInt(num2))}`
      );
    } else if (choice == `4`) {
      console.log(`the division is ${Divide(parseInt(num1), parseInt(num2))}`);
    
    } else if (choice == `5`) {
      console.log(`Quitting`);
    
  } 
}else {
  console.log("Invalid choice. Please enter a valid choice.");
}}
