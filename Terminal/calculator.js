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

var x = true;
while (x) {
  console.log("--------------\n     MENU\n--------------");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Quit");
  var choice = prompt("Enter your choice: ");
  if (choice == `5`) {
    console.log(`Quitting`);

    break;
  }
  if (choice == `1` || choice == `2` || choice == `3` || choice == `4`) {
    console.log("Enter two numbers : ");
    const num1 = prompt("Enter the first number :  ");
    const num2 = prompt("Enter the second numbers : ");

    if (choice == `1`) {
      console.log(
        `--------------\nthe sum is ${add(parseInt(num1), parseInt(num2))}`
      );
    } else if (choice == `2`) {
      console.log(
        `--------------\nthe Subtraction is ${Subtract(
          parseInt(num1),
          parseInt(num2)
        )}`
      );
    } else if (choice == `3`) {
      console.log(
        `--------------\nthe Multiply is ${Multiply(
          parseInt(num1),
          parseInt(num2)
        )}`
      );
    } else if (choice == `4`) {
      if (num2 == 0) {
        console.log("ERROR DIVIDING BY 0");
      } else {
        console.log(
          `--------------\nthe division is ${Divide(
            parseInt(num1),
            parseInt(num2)
          )}`
        );
      }
    } else {
      console.log("Invalid choice. Please enter a valid choice.");
    }
  }
}
