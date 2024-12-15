// function declaration 

// function add (a, b){
//     const result = a + b;
//     return result;
// }

function add (a, b){
    return a + b;
}
const sum = add(5, 93);
 console.log(sum)



// function expression 
const add2 = function(a, b){
    return a + b;
}
const result = add2(5, 3); // Calls the function with `a = 5` and `b = 3`
// console.log(result);

//  arrow function

const add3=(a,b) =>a+b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
// const sum = add4(4,5,6,7)
// console.log(sum);
const multiply = (num1, num2) => num1 * num2;
const mult = multiply(3, 12)
console.log(mult)