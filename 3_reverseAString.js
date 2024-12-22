/////     REVERSE A STRING     ///////
const input = "uzbekistan";


//Method1 
var result = input.split('').reverse().flat().join('');
console.log("Using short method : ", result);


//Method2
function reverseTheString(str){
    let reversedStr='';
    for(let i=str.length-1;i>=0;i--){
        reversedStr+=str[i];
    }
    return reversedStr
}
result=(reverseTheString(input));
console.log('Using for loop : ', result)