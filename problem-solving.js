// Problem 1: Reverse a String
function reverseString(str){
    return str.split('').reverse().join('')
}
reverseString('hello')


// Problem 2: Count Vowels in a String
function countVowel(word){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const chars = word.toLowerCase().split('')
    chars.forEach(c => {
        if(vowels.includes(c)){
            count ++;
        }
    }) 
    return count;
}
countVowel('programming');


// Problem 3: Check for Palindrome
function palindrome(word){
    const reversed = word.toLowerCase().split('').reverse().join('');
    if(word === reversed){
        return true;
    }else{
        return false;
    }
}

palindrome('madam')


// Problem 4: Find the Maximum Number
function findMax(arr){
    return Math.max(...arr)
}
findMax([5, 1, 9, 3])


// Problem 5: Remove Duplicates from an Array
function removeDuplicate(num){
   return [... new Set(num)]
}
removeDuplicate([1, 2, 2, 3, 4, 4])



// Problem 6: Sum of All Numbers in an Array
function sum(nums){
    return nums.reduce((acc, curr) => acc + curr, 0)
}
sum([1, 2, 3, 4])


// Problem 7: Find Even Numbers in an Array 
function getEvenNumbers(nums) {
    return nums.filter(num => num % 2 === 0);
}

getEvenNumbers([1, 2, 3, 4, 5, 6]);


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

capitalizeWords('hello world')


// Problem 9: Find the Factorial of a Number
function calculateFactorial(n) {
   
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; 
    }

    return result;
}

calculateFactorial(5);

// Problem 10: PingPong Challenge
function pingPong() {
    for (let i = 1; i <= 20; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } 
      
        else if (i % 3 === 0) {
            console.log("Ping");
        } 
       
        else if (i % 5 === 0) {
            console.log("Pong");
        } 
        
        else {
            console.log(i);
        }
    }
}

pingPong();
