//1. create a function that adds two numbers and alerts the sum
let addTwoNumbers = (num1, num2) => alert (num1 + num2);

addTwoNumbers(1, 3);
addTwoNumbers(2, 8);
addTwoNumbers(19, 20);

//2. create a function that multiplys three numbers and console logs the product

let multiplyThreeNumbers = (n1, n2, n3) => console.log (n1 * n2 * n3);

multiplyThreeNumbers(1, 2, 3);
multiplyThreeNumbers(3, 5, 6);
multiplyThreeNumbers(10, 20, 320);

//3. create a function that divides two numbers and returns the ???
let dividesTwoNumbers = (d1, d2) => { 
    let div = d1/d2;
    return div;
}
dividesTwoNumbers(100, 2);

//4. Using Helper Functions, these functions being called within another function. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
//4.a A function that converts the temperature from Celsius to Fahrenheit,
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  getFahrenheit(15); // Returns 59

  //4.b Using Helper function, to get the total cost of computers ordered.
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);

  //5. A function that logs array of numbers to negatives.
  function convertToNegatives(xx) {
    for (let i=0; i<xx.length; i++) {
       console.log(-xx[i], typeof(-xx[i]), -xx[0] + (-xx[1]));
    }
  }
  convertToNegatives([1, 2, 3, 4, 5])