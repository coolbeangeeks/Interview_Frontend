// *1* Given an array of n unique numbers taken from 1 to n+1, find the missing number.
// Sample Input: [3, 7, 1, 2, 8, 4, 5]
// Sample Output: The missing number is 6.

// *2* Given an array and a number n, rotate the array by n positions.
// Sample Input: Array: [1,2,3,4,5], n=2
// Sample Output: Rotated Array: [3,4,5,1,2]

function MissingNumber(n){
    let c=n.length+1;
    let sum1=(c*(c+1))/2
    let sum2=0;
    for(let i=0;i<n.length;i++){
        sum2+=n[i];
    }
    return sum1-sum2;
}
console.log(MissingNumber([3,7,1,2,8,4,5]))

function rotLeft(a, d) {
    while (d) {
       a.push(a.shift());
       d--;
    }
 return a;
 }
 console.log(rotLeft([1,2,3,4,5],2))