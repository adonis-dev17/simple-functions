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

//4. // Defining the function with default values
function sum(num1 = 6, num2 = 1) {
    return num1 + num2;
  }
  
  // Calling the function
  console.log(sum(8));
  // Output 9