# JAVASCRIPT INTERVIEW QUESTIONS 
### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [JavaScript Engine](#What-is-a-JavaScript-Engine) |
| 2 | [Working of Javascript Engine](#How-Does-a-JavaScript-Engine-Work) |
| 3 | [Execution Context](#what-is-execution-context-) |
| 4 | [Hoisting](#hoisting) |
| 5 | [Scope Chain](#what-is-scope-chain-) |
| 6 | [this variable](#what-is-the-this-keyword-in-javascript) |
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
> V8 (Google)
> SpiderMonkey (Mozilla)
> JavaScriptCore (JSC or Nitro)
> Chakra (Microsoft)
> Hermes (Meta)

---
<div>
<p align="center">
    <img src="./images/jsEngine_flow.png" alt="Javascript Engine" width="70%">
</p>
</div>

---





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

3. ### What is Execution context ?
In JavaScript, the execution context is the environment in which JavaScript code is evaluated and executed. It determines:
* What data is accessible (variables, functions, objects).
* How the code behaves in a specific context.
Every time a function is invoked, or the global code is executed, an execution context is created.
---
<div>
<p align="center">
    <img src="./images/executionContext.png" alt="Javascript Engine" width="70%">
</p>
</div>

---
**TYPES of Execution Context**
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rare)

**PHASES of Execution Context**

Each execution context goes through two phases:

**Creation Phase:**
* Creates the Variable Object - Memory is allocated for variables and functions.
* Creates the scope chain - List of all scopes.
* Variables are set to undefined (hoisting).
* Functions are stored in their entirety (hoisting).
* this is determined based on the context.

**Execution Phase:**
> Code is executed line by line.
> Variables are assigned their actual values.

---
<div>
<p align="center">
    <img src="./images/ExecutionContext_variableObject.png" alt="Javascript Engine" width="50%">
</p>
</div>

---
**COMPONENTS of an Execution Context**

**Variable Environment:**
1. Stores variables, function declarations, and the outer environment reference.

**Lexical Environment:**
1. The structure holding the local variables and functions.
2. Considers the location of variables in the source code.

**this Binding:**
1. Refers to the object associated with the execution context.
2. In the global context, this refers to the global object (window or global).
3. Inside functions, it depends on how the function is called (e.g., method call, arrow function).

**Execution Context STACK (Call Stack)**
JavaScript uses a call stack to manage execution contexts. When a function is called:

1. A new execution context is created and added to the stack.
2. When the function finishes execution, its context is removed from the stack.

**Examples**
```javascript
    var name = "Jack";                  
    console.log("Global Execution Context : Invoked & Pushed  - variable name, func greeting() sayHi()");

    function greeting() {
        console.log('Execution context greeting: Invoked & Pushed')
        console.log("GREETING");
        sayHi();
        console.log('Execution context greeting: Popped off')
    }

    function sayHi() {
        console.log('Execution context sayHi: Invoked & Pushed')
        console.log("HI " , name.toUpperCase() , 'HOW ARE YOU ? ' );
        console.log('Execution context sayHi: Popped off')
    }

    greeting();
    console.log("Global Execution Context : Popped off");

```
Execution Steps:
1. STEP 1: The GEC is created and pushed on the execution stack as the global() object.
2. STEP 2: The greeting() function is invoked and pushed on the stack.
3. STEP 2: The sayHi() function is invoked and pushed on the stack.
4. STEP 3: The sayHi() function is popped off the stack.
5. STEP 3: The greetings() function is popped off the stack.
---
<div>
<p align="center">
    <img src="./images/executionStack.png" alt="Javascript Engine" width="70%">
</p>
</div>

---


Visualizing Execution Context
```javascript
    function greet() {
        let name = "John";
        console.log("Hello, " + name);
    }

    greet();
```
1. Global Execution Context:
    a. greet is defined.
2. Function Execution Context for greet:
    a. name is stored in memory.
    b. console.log() executes.





**[⬆ Back to Top](#table-of-contents)**

4. ### Hoisting
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are declared in the code.

However, only the declarations are hoisted, not the initializations or assignments.

1. Function declarations are fully hoisted.
2. Variable declarations with var are hoisted but initialized to undefined.
3. Variables declared with let and const are also hoisted but remain in a temporal dead zone (TDZ) until their declaration is encountered in the code.

| Declaration Type           | Hoisted?                  | Initialized?           | Temporal Dead Zone?        |
|----------------------------|---------------------------|------------------------|----------------------------|
| var                        | Yes                       | Yes (undefined)        |	No                         |
| let                        | Yes                       | No                     | Yes                        |
| const                      | Yes                       | No	                  | Yes                        |
| Function Declaration	     | Yes (entire function)	 | Yes	                  | No                         |
| Function Expression        | Only the variable         |	No                    |	No                         |


**Examples of Hoisting**

1. Hoisting with function declarations
```javascript
    greet(); // Output: Hello, World!

    function greet() {
        console.log("Hello, World!");
    }
```
Function declarations are fully hoisted, meaning you can call the function before its declaration.

2. Hoisting with var 
```javascript
    console.log(a); // Output: undefined
    var a = 10;
    console.log(a); // Output: 10

```
During the compilation phase, the declaration var a is hoisted to the top.
The variable is initialized to undefined until the assignment a = 10 is executed.

3. Hoisting with let and const
```javascript
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
```
For let & const, the area before initialization is called the temporal dead zone (TDZ).
let and const declarations are hoisted but are not initialized until their line of declaration is reached.

4. Hoisting with function expressions 
```javascript
    greet(); // TypeError: greet is not a function
    var greet = function () {
    console.log("Hello How are you ?");
};
```
Here, greet is declared with var and is hoisted as a variable(var greet). 
However, its value (the function) is not assigned until runtime (Creation phase has created it as variable greet = undefined. Execution phase cannot read function of undefined undefined()).





**[⬆ Back to Top](#table-of-contents)**

5. ###  What is Scope Chain ?
The scope chain in JavaScript is a mechanism that determines how variables, functions, and objects are accessed in nested functions. It is the chain of lexical environments where a JavaScript interpreter looks for variable and function declarations.

When a variable or function is accessed, the JavaScript engine:

1. First checks the current scope.
2. If it doesn’t find the variable, it looks in the outer (parent) scope.
3. This process continues up the chain until the global scope is reached.

If the variable is not found in any scope, a ReferenceError is thrown.

**TYPES of Scopes in JavaScript**

**Global Scope:**
1. Variables and functions declared outside of any function or block.
2. Accessible from anywhere in the code.
3. Forms the top of the scope chain.

**Function Scope:**
1. Variables declared inside a function.
2. Accessible only within that function and its nested scopes.

**Block Scope:**
1. Variables declared with let and const inside a block (e.g., {}).
2. Accessible only within that block.

```javascript
const globalVar = "I am global";

function outer() {
    const outerVar = "I am outer";

    function inner() {
        const innerVar = "I am inner";

        console.log(globalVar); // "I am global"
        console.log(outerVar);  // "I am outer"
        console.log(innerVar);  // "I am inner"
    }

    inner();
}

outer();
```





**[⬆ Back to Top](#table-of-contents)**

6. ### What is the this Keyword in JavaScript? 
In JavaScript, this is a special keyword that refers to the object that is executing the current function. The value of this depends on how and where the function is invoked, not where it is defined.

**Key Rules for this in JavaScript**
1. 

2. 






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
    console.log("Object and Primitive Comparison")
    const obj = { key: 'value' };
    console.log(obj == '[object Object]'); // true
    console.log(obj === '[object Object]'); // false
```

```javascript
    console.log("Equality and Type Coercion")
    console.log(0 == false); // true
    console.log(0 === false); // false
    console.log('' == false); // true
    console.log('' === false); // false
```

```javascript
    console.log("Complex Coercion with Arrays")
    console.log([] == 0); // true
    console.log([] === 0); // false
    console.log([1] == 1); // true
    console.log([1] === 1); // false
    console.log([1, 2] == '1,2'); // true
    console.log([1, 2] === '1,2'); // false
```

```javascript
    console.log("Implicit Conversion with null and undefined")
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    console.log(null == 0); // false
    console.log(undefined == 0); // false
    console.log(undefined === 0); // false
```

```javascript
    console.log("Edge Cases with NaN");
    console.log(NaN == NaN); // false
    console.log(NaN === NaN); // false
    console.log(isNaN(NaN)); // true
    console.log(Number.isNaN(NaN)); // true
```

```javascript
    console.log("Comparing Functions")
    function funcA() {}
    function funcB() {}
    console.log(funcA == funcB); // ?
    console.log(funcA === funcB); // ?
    console.log(funcA == funcA); // ?
    console.log(funcA === funcA); // ?
```

```javascript
    console.log("String and Number Comparisons")
    console.log('42' == 42); // true
    console.log('42' === 42); // false
    console.log('0x2A' == 42); // true
    console.log('0x2A' === 42); // false
```

```javascript
    console.log("Dynamic Values");
    let a = true;
    let b = '1';
    console.log(a == b); // true
    console.log(a === b); // false

    b = 1;
    console.log(a == b); // true
    console.log(a === b); // false

    b = true;
    console.log(a == b); // true
    console.log(a === b); // true
```

```javascript
    console.log("Symbol Comparisons");
    const sym1 = Symbol('id');
    const sym2 = Symbol('id');
    console.log(sym1 )
    console.log(sym2)
    console.log(sym1 == sym2); // false
    console.log(sym1 === sym2); // false
    console.log(sym1 == sym1); // true
    console.log(sym1 === sym1); // true
```

```javascript
    console.log("Object to Primitive Conversion");
    const obj1 = { valueOf: () => 1 };
    const obj2 = { toString: () => '1' };
    console.log(obj1 == obj2); // false
    console.log(obj1 === obj2); // false
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
