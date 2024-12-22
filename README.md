# JAVASCRIPT INTERVIEW QUESTIONS 
### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [JavaScript Calculator](#JavaScript-Calculator) |
| 2 | [Nested Array](#Nested-Array) |
| 3 | [Reverse a String](#Reverse-a-String) |
| 4 | [Chain Calculator](#Chain-Calculator) |
| 5 | [Remove Duplicates from an Array](#Remove-Duplicates-from-an-Array) |
| 6 | [Prime Number](#Prime-Number) |
| 7 | [Fibonacci Series](#Fibonacci-Series) |
| 8 | [Equality vs Strict Equality](#Equality-vs-Strict-Equality) |
| 9 | [Largest number in Array](#Largest-number-in-Array) |
| 10 | [Count vowels in a string](#Count-vowels-in-a-string) |
| 11 | [BalancedBrackets](#Balanced-Brackets) |
| 12 | [](#) |
| 13 | [](#) |
| 14 | [](#) |


1. ### JavaScript Calculator
Write a program to make a calculator using simple javascript, html, css.

2. ### Nested Array
Write a program to flatten a nested array.
[[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]]

Using Array.flat():
```javascript
   const nestedArray = [[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]];
   var result = nestedArray.flat(Infinity);
   console.log(result);
```

Using for for loop: 
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



3. ### Reverse a String
Write a program to reverse a string

```javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    console.log(null == 0); // false
    console.log(undefined == 0); // false
    console.log(undefined === 0); // false
```


4. ### Chain Calculator
Write a program to make a chain calculator in javascript

```javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    console.log(null == 0); // false
    console.log(undefined == 0); // false
    console.log(undefined === 0); // false
```


5. ### Remove Duplicates from an Array
Write a program to remove duplicates from an array 
[1,4,5,6,98,56,76,22,98,5]

6. ### Check if Prime number
Write a program to check if given number is prime or not.

7. ### Fibonacci Series
Write a program to generate a fibonacci series for n numbers given.
Take input = 15. Generate a sequence of 15count. Result should be Result shoud be [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]

8. ### Equality vs Strict Equality
Few examples of comparison between == and ===

```javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    console.log(null == 0); // false
    console.log(undefined == 0); // false
    console.log(undefined === 0); // false
```

9. ### Largest number in Array
Find largest number in a given array

10. ### Count vowels in a string
Write a program to count number of vowels in given string

11. ### BalancedBrackets
Check if all brackets are balanced.
([{}]) should return true
(((}}}{][] should return false
**[⬆ Back to Top](#table-of-contents)**

12.

13.

14.
