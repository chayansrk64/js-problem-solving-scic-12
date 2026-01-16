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

