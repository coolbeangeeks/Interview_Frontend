// *1* Ask the user for a number and determine if it is even or odd. Display the result.
// Sample Input: 7
// Sample Output: The number 7 is odd.

// *2* Ask the user for a number and determine if it's a perfect number (a positive integer that is equal to the sum of its proper divisors, excluding itself).
// Sample Input: 28
// Sample Output: The number 28 is a perfect number.


// *3* Prompt the user for a year and determine if it's a leap year, displaying the result.
// Sample Input: 2024

// Sample Output: The year 2024 is a leap year.
function check_Even_Odd(n){
    if(n%2==0)return 'Even'
    return 'Odd'
}
let x=5
console.log(check_Even_Odd(x));

function perfectNumber(n){
    let sum=1;
    for(let i=2 ;i<n-1;i++){
        if(n%i==0)sum+=i
    }
    if(sum==n)return true;
    return false;
}

console.log(perfectNumber(x));

function checkLeapYear(n){
    if(n%400==0)return true;
    else if(n%100==0)return false
    else if(n%4==0)return true;
    return false
}
console.log(checkLeapYear(2024));