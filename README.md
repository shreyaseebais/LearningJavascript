# JAVASCRIPT INTERVIEW QUESTIONS 
### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [JavaScript Engine](#What-is-a-JavaScript-Engine) |
| 2 | [Working of Javascript Engine](#How-Does-a-JavaScript-Engine-Work) |
| 3 | [](#) |
| 4 | [Hoisting](#Hoisting) |
| 5 | [](#) |
| 6 | [](#) |
| 7 | [](#) |
| 8 | [](#) |
| 9 | [](#) |
| 10 | [](#) |
| 1 | [](#) |
| 2 | [](#) |
| 3 | [](#) |
| 4 | [](#) |
| 5 | [](#) |
| 6 | [](#) |
| 7 | [](#) |
| 8 | [](#) |
| 9 | [](#) |
| 10 | [](#) |
| 101 | [JavaScript Calculator](#JavaScript-Calculator) |
| 102 | [Nested Array](#Nested-Array) |
| 103 | [Reverse a String](#Reverse-a-String) |
| 104 | [Chain Calculator](#Chain-Calculator) |
| 105 | [Remove Duplicates from an Array](#Remove-Duplicates-from-an-Array) |
| 106 | [Prime Number](#Prime-Number) |
| 107 | [Fibonacci Series](#Fibonacci-Series) |
| 108 | [Equality vs Strict Equality](#Equality-vs-Strict-Equality) |
| 109 | [Largest number in Array](#Largest-number-in-Array) |
| 110 | [Count vowels in a string](#Count-vowels-in-a-string) |
| 111 | [BalancedBrackets](#Balanced-Brackets) |
| 112 | [](#) |
| 113 | [](#) |
| 114 | [](#) |
| 115 | [](#) |
| 116 | [](#) |
| 117 | [](#) |
| 118 | [](#) |
| 119 | [](#) |
| 120 | [](#) |



**[⬆ Back to Top](#table-of-contents)**

1. ### What is a JavaScript Engine?
A JavaScript engine is a program or interpreter that executes JavaScript code. It is responsible for parsing, optimizing, and running the code written in JavaScript, enabling it to interact with web pages, servers, and other applications.

Modern JavaScript engines are highly optimized and use Just-In-Time (JIT) compilation to improve performance.

**Popular JavaScript Engines**
1. V8 (Google)
2. SpiderMonkey (Mozilla)
3. JavaScriptCore (JSC or Nitro)
4. Chakra (Microsoft)
5. Hermes (Meta)

**[⬆ Back to Top](#table-of-contents)**

2. ### How Does a JavaScript Engine Work?

**Parsing:**
The engine reads the JavaScript code (source code) and converts it into an abstract syntax tree (AST), a structured representation of the code.

**Compilation:**
Instead of interpreting JavaScript directly (line-by-line), modern engines use JIT compilation, where the code is compiled into machine code during execution for faster performance.

**Execution:**
The compiled machine code is executed, and the JavaScript program runs.

**Optimization:**
Engines continuously analyze the running code and optimize it for better performance, adapting to frequently executed paths (hot code).

**[⬆ Back to Top](#table-of-contents)**

4. ### Hoisting

**[⬆ Back to Top](#table-of-contents)**

101. ### JavaScript Calculator
Write a program to make a calculator using simple javascript, html, css.

**[⬆ Back to Top](#table-of-contents)**

102. ### Nested Array
Write a program to flatten a nested array.
[[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]]

Using Array.flat():
```javascript
   const nestedArray = [[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]];
   var result = nestedArray.flat(Infinity);
   console.log(result);
```

Using for loop: 
```javascript
   const nestedArray = [[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]];
   result = flattenTheArray(nestedArray);
   console.log(result);

    function flattenTheArray(arr){
        let flatArray = [];
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flatArray = flatArray.concat(flattenTheArray(arr[i]))
            }else{
                flatArray.push(arr[i]);
            }
        }
        return flatArray;
    }
```

Using reduce method: 
```javascript
   result = flattenTheArrayUsingReduce(nestedArray);
   console.log(result);

   function flattenTheArrayUsingReduce(arr){
        return arr.reduce((acc, item)=>{
            return acc.concat(Array.isArray(item)? flattenTheArrayUsingReduce(item):item)
        }, []); 
    }
```

**[⬆ Back to Top](#table-of-contents)**

103. ### Reverse a String
Write a program to reverse a string


```javascript
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
```

**[⬆ Back to Top](#table-of-contents)**

104. ### Chain Calculator
Write a program to make a chain calculator in javascript

```javascript
class ChainCalculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(num) {
      this.value += num;
      return this; // Enable chaining
    }
  
    subtract(num) {
      this.value -= num;
      return this;
    }
  
    multiply(num) {
      this.value *= num;
      return this;
    }
  
    divide(num) {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.value /= num;
      return this;
    }
  
    reset() {
      this.value = 0;
      return this;
    }
  
    getResult() {
      return this.value;
    }
  }
  
  
  const calculator = new ChainCalculator();
  const result = calculator
    .add(20)         
    .subtract(5)     
    .multiply(10)     
    .divide(4)      
    .getResult();    
  
  console.log("Result :  ",  result); 
```

**[⬆ Back to Top](#table-of-contents)**

105. ### Remove Duplicates from an Array
Write a program to remove duplicates from an array 
[1,4,5,6,98,56,76,22,98,5]

```javascript
    const input = [1,4,5,6,98,56,76,22,98,5];


    //Method1 
    var uniqueArray = [...new Set(input)];
    console.log("Using Set : ", uniqueArray);


    //Method2
    function removeDuplicates(arr){
        let result=[];
        arr.forEach(item => {
            if(!result.includes(item)){
                result.push(item)
            }
        })
        return result
    }
    uniqueArray=removeDuplicates(input);
    console.log('Using for each : ', uniqueArray)
```

**[⬆ Back to Top](#table-of-contents)**

106. ### Check if Prime number
Write a program to check if given number is prime or not.

```javascript
    const input = 29;

    function isPrime(num){
        if(num<1) return false;
        if(num===2)  return true;
        for(let i =2 ; i<Math.sqrt(num);i++){
            if(num%i === 0) return false;
        }
        return true;
    }

    result=isPrime(input);
    console.log('Is prime ?  ', result)
```

**[⬆ Back to Top](#table-of-contents)**

107. ### Fibonacci Series
Write a program to generate a fibonacci series for n numbers given.
Take input = 15. Generate a sequence of 15count. Result should be Result shoud be [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]

```javascript
    input = 15;

    function fibonacciSeries(num){
        console.log(num)
        let series = [0,1];
        for(let i=0; i<num-2; i++){
            series.push(series[i]+ series[i+1]);
        }
        return series;
    }

    console.log('Series upto is', fibonacciSeries(input));
```

**[⬆ Back to Top](#table-of-contents)**

108. ### Equality vs Strict Equality
Few examples of comparison between == and ===

```javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    console.log(null == 0); // false
    console.log(undefined == 0); // false
    console.log(undefined === 0); // false
```

**[⬆ Back to Top](#table-of-contents)**

109. ### Largest number in Array
Find largest number in a given array

```javascript
    input = [3,5,8,77,35,98,2,35];

    // Method 1
    function largest(arr){
        let largest = arr[0];
        for(let i=0; i<arr.length; i++){
        if(arr[i]>largest)  { largest=arr[i]}
        }
        return largest
    }
    console.log('Using for loop ', largest(input));


    //Method2 
    function largestNumber(arr){
        return Math.max(...arr)
    }
    console.log('Using Math ', largestNumber(input));

    //Method3
    function largestNumberUsingSort(arr){
        arr.sort((a,b)=> b-a);
        return arr[0];
    }
    console.log('Using sort : ', largestNumberUsingSort(input));
```

**[⬆ Back to Top](#table-of-contents)**

110. ### Count vowels in a string
Write a program to count number of vowels in given string

```javascript
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
```
**[⬆ Back to Top](#table-of-contents)**

111. ### BalancedBrackets
Check if all brackets are balanced.
([{}]) should return true
(((}}}{][] should return false

**[⬆ Back to Top](#table-of-contents)**

112.

113.

114.
