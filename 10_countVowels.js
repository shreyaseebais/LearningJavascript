//////     Count Vowels    //////////
input = 'uzbekistan';

// Method 1
function countVowels(str){
    let vowelsStr = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if(vowelsStr.includes(char)){
           count++;
        }
    }
    return count;
}
console.log('Using for loop ', countVowels(input));


//Method2 
function countVowelsUsingRegex(str){
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches? matches.length: 0;
    
}
console.log('Using regex ', countVowelsUsingRegex(input));