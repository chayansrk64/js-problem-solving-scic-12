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
const result = removeDuplicate([1, 2, 2, 3, 4, 4])
console.log(result);


