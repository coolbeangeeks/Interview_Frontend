// *1*Prompt the user for a binary number and convert it to its decimal equivalent, displaying the result.
// Sample Input: 1101
// Sample Output: The decimal equivalent of 1101 is 13.

// *2* Given a string, compress it using counts of repeated characters.
// Sample Input: aaabccddeee
// Sample Output: a3b1c2d2e3


// *3* Ask the user for two strings and determine if they are anagrams of each other.
// Sample Input: listen, silent
// Sample Output: The strings "listen" and "silent" are anagrams.
function BtoD(n){
    let s= n.toString()
    let c=s.length-1;
    let sum=0
    for(let i=0;i<s.length;i++){
        if(s[i]!=='0'){
            sum+=Math.pow(2,c);
            c=c-1;
        }
        else c=c-1
    }
    return sum;
    
}
console.log(BtoD(10000));

function Compression(s){
    let start=0
    let end=start+1;
    let res=''
    let count=1;
    while(end<s.length){
        if(s[start]!==s[end]){
            res+=s[start]+count
            count=1;
            start=end;
            end=start+1;
            
        }
        else{
            count+=1;
            end+=1;
        }
    }
    return res+s[start]+count;
}
console.log(Compression('aaaaabcdefg'));

function isAnagram(s1, s2) {

    if (s1.length !== s2.length) {
        return false;
    }
    
    let count = new Array(26).fill(0);
    
 
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < s2.length; i++) {
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }
    
    return true;
}

let s1 = "listen";
let s2 = "silent";
console.log(isAnagram(s1, s2));