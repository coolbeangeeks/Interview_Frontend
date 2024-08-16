// *1*Ask the user for a number and compute its factorial, displaying the result.
// Sample Input: 5
// Sample Output: The factorial of 5 is 120.


// *2* Prompt the user for a string and check whether it's a palindrome (reads the same forward and backward).
// Sample Input: radar
// Sample Output: The string "radar" is a palindrome.

// *3* Ask the user for two numbers and find their GCD, displaying the result.
// Sample Input: 56, 98

// Sample Output: The GCD of 56 and 98 is 14.


function Fact(n){
    if(n==0)return 1;
    return n*Fact(n-1)
}

console.log(Fact(5));


function palindromChecker(s){
    let start=0;
    let end=s.length-1
    console.log(s[end])

    while(start<end){
        if(s[start]!==s[end]) return false
        else{
            start+=1;
            end-=1;
        }
    }
    return true

}
console.log(palindromChecker('abc'))


function GCD(a,b){
    if(b==0)return a;
    return GCD(b,a%b);
}
console.log(GCD(56,98));

