// Add function
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
while (true) {
  var choice = prompt("Enter your choice: ");
  if (choice == `1` || choice == `2` || choice == `3` || choice == `4`) {
    console.log();
    var num1,
      num2 = prompt("Enter two numbers");
    break;
  }
  console.log("Invalid choice. Please enter a valid choice.");
}

console.log("MENU");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

if (choice == `1`) {
  console.log(add(1, 2));
} else if (choice == `2`) {
  console.log(Subtract(1, 2));
} else if (choice == `3`) {
  console.log(Multiply(1, 2));
} else if (choice == `4`) {
  console.log(Divide(1, 2));
}
