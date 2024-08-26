// *1* Find the sum of all multiples of 3 or 5 below a given number.
// Sample Input: 10
// Sample Output: The sum is 23.


// *2*Create a countdown timer that takes a number of seconds and counts down to zero, displaying the remaining time every second.

// Sample Input: 5
// Sample Output:
// 5 seconds left.
// 4 seconds left.
// ...
// 0 seconds left.


function MultipleSum(n){
    let sum=8;
    for(let i=6;i<n;i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }
    return sum;
}
console.log(MultipleSum(10))

let n = 5;
let myInterval = setInterval(decrement, 1000);
function decrement() {
    console.log(`${n} Second left`);
    n -= 1;
    if (n < 0) clearInterval(myInterval);
}
