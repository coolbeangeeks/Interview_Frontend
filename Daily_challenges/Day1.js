// *1*- Prompt the user for two numbers. Then perform and display the results for addition, subtraction, multiplication, and division of the two numbers.
// Sample Input: 5, 3
// Sample Output:
//  Sum: 8
//  Difference: 2
//  Product: 15
//  Quotient: 1.67

// *2*- ask the user for a number and determine if it's prime, displaying the result
// Sample Input: 17
// Sample Output: The number 17 is prime.

// *1*
let a=5;
let b=3
function sum(a,b){
    return a+b
}
function Difference(a,b){
    return a-b
}
function Product(a,b){
    return a*b
}
function Quotient(a,b){
    return a/b
}
console.log(`Sum: ${sum(a,b)}`)
console.log(`Difference: ${Difference(a,b)}`)
console.log(`Product: ${Product(a,b)}`)
console.log(`Quotient: ${Quotient(a,b)}`)
// *2*
function primeNumber(a){
    for(let i=2;i<=a-1;i++){
        if(a%i==0) return false
    }
    return true;
}
console.log(primeNumber(a))
//*3*

let fib=[];
let f1=0;
let f2=1;
fib.push(f1,f2);
let n=7;
let i=fib.length

while(i<=n-1){
    fib[i]=fib[i-1]+fib[i-2];
    i++
}
console.log(fib)