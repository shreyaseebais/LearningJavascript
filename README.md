# JAVASCRIPT INTERVIEW QUESTIONS 
### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [ JavaScript Engine ](#What-is-a-JavaScript-Engine) |
| 2 | [ Working of Javascript Engine ](#How-Does-a-JavaScript-Engine-Work) |
| 3 | [ Execution Context ](#what-is-execution-context-) |
| 4 | [ Hoisting ](#hoisting) |
| 5 | [ Scope Chain ](#what-is-scope-chain-) |
| 6 | [ this keyword ](#what-is-the-this-keyword-in-javascript) |
| 7 | [ How to iterate over a JavaScript object ? ](#how-to-iterate-over-a-javascript-object-) |
| 8 | [](#) |
| 9 | [](#) |
| 10 | [](#) |
| 11 | [](#) |
| 12 | [](#) |
| 13 | [](#) |
| 14 | [](#) |
| 15 | [](#) |
| 16 | [](#) |
| 17 | [](#) |
| 18 | [](#) |
| 19 | [](#) |
| 20 | [](#) |
| 101 | [JavaScript Calculator](#JavaScript-Calculator) |
| 102 | [](#) |
| 103 | [](#) |
| 104 | [](#) |
| 105 | [](#) |
| 106 | [](#) |
| 107 | [](#) |
| 108 | [](#) |
| 109 | [](#) |
| 110 | [](#) |
| 111 | [](#) |
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

### 1. What is a JavaScript Engine?
A JavaScript engine is a program or interpreter that executes JavaScript code. It is responsible for parsing, optimizing, and running the code written in JavaScript, enabling it to interact with web pages, servers, and other applications.

Modern JavaScript engines are highly optimized and use Just-In-Time (JIT) compilation to improve performance.

**Popular JavaScript Engines**
* V8 (Google)
* SpiderMonkey (Mozilla)
* JavaScriptCore (JSC or Nitro)
* Chakra (Microsoft)
* Hermes (Meta)

---
<div>
<p align="center">
    <img src="./images/jsEngine_flow.png" alt="Javascript Engine" width="70%">
</p>
</div>

---





**[⬆ Back to Top](#table-of-contents)**

### 2. How Does a JavaScript Engine Work?

**Parsing:**
The engine reads the JavaScript code (source code) and converts it into an abstract syntax tree (AST), a structured representation of the code.

**Compilation:**
Instead of interpreting JavaScript directly (line-by-line), modern engines use JIT compilation, where the code is compiled into machine code during execution for faster performance.

**Execution:**
The compiled machine code is executed, and the JavaScript program runs.

**Optimization:**
Engines continuously analyze the running code and optimize it for better performance, adapting to frequently executed paths (hot code).





**[⬆ Back to Top](#table-of-contents)**

### 3. What is Execution context ?
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
* Code is executed line by line.
* Variables are assigned their actual values.


<div>
<p align="center">
    <img src="./images/ExecutionContext_variableObject.png" alt="Javascript Engine" width="50%">
</p>
</div>

**COMPONENTS of an Execution Context**

**Variable Environment:**
1. Stores variables, function declarations, and the outer environment reference.

**Lexical Environment:**
* The structure holding the local variables and functions.
* Considers the location of variables in the source code.

**Lexical Scope** (or static scope) refers to the scope determined by the position of variables and functions in the source code. It means that a function's scope is defined during its creation, based on where it is written in the code, not where it is called.

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
* STEP 1: The GEC is created and pushed on the execution stack as the global() object.
* STEP 2:  
    * The greeting() function is invoked and pushed on the stack.
    * The sayHi() function is invoked and pushed on the stack.
* STEP 3: 
    * The sayHi() function is popped off the stack.
    * The greetings() function is popped off the stack.
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
* Global Execution Context:
    * greet is defined.
* Function Execution Context for greet:
    * name is stored in memory.
    * console.log() executes.





**[⬆ Back to Top](#table-of-contents)**

### 4. Hoisting
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

### 5. What is Scope Chain ?
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

### 6. What is the this Keyword in JavaScript? 
In JavaScript, this is a special keyword that refers to the object that is executing the current function. The value of this depends on how and where the function is invoked, not where it is defined.

|           Context	                 |               Value of this                               |
|------------------------------------|-----------------------------------------------------------|
| Global Scope	                     | Global object (window in browsers).                       |
| Regular Function (non-strict)      | Global object (window in browsers).                       |   
| Regular Function (strict mode)     | undefined.                                                |
| Method in Object	                 | The object the method is called on.                       |
| Constructor Function	             | The newly created object.                                 |
| Class	                             | The instance of the class.                                |
| Arrow Function	                 | Inherited from the enclosing lexical environment.         |
| Event Handler	                     | The element that triggered the event.                     | 
| Explicit Binding (call/apply/bind) |Explicitly set value.                                      |



**Key Rules for this in JavaScript**
* The value of this is determined at runtime, depending on how a function is called.
* Arrow functions do not have their own this; they inherit it from their lexical scope.


**How this Works in Different Contexts**

* 1. Global Context
In the global scope:

* In browsers, this refers to the global object (window).
* In Node.js, it refers to the global object (global).
```javascript
   console.log(this); // In browsers, outputs: window
```

```javascript
   "use strict";
    console.log(this); // undefined
```
* 2. Inside a Function
* Non-strict Mode: this refers to the global object.
* Strict Mode: this is undefined.
```javascript
   function showThis() {
    console.log(this);
    }
    showThis(); // In browsers, outputs: window

    "use strict";
    function strictShowThis() {
        console.log(this);
    }
    strictShowThis(); // undefined
```

* 3. Inside an Object (Method Call)
* When a function is called as a method of an object, this refers to the object that owns the method.
```javascript
   const obj = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
        },
    };
    obj.greet(); // Outputs: Alice

```

* 4. Inside a Constructor Function
* In a constructor function, this refers to the newly created object.
```javascript
    function Person(name) {
        this.name = name;
    }

    const person1 = new Person("Bob");
    console.log(person1.name); // Outputs: Bob
```
* 5. Inside a Class
* In a class, this refers to the instance of the class.
```javascript
   class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
        }   
    }

    const person = new Person("Alice");
    person.greet(); // Outputs: Hello, my name is Alice

```

* 6. Arrow Functions

* Arrow functions do not have their own this. Instead, this is lexically inherited from the surrounding scope (the value of this where the arrow function is defined).
```javascript
const obj = {
    name: "Alice",
    greet: () => {
        console.log(this.name); // `this` refers to the global object (or undefined in strict mode)
    },
};
obj.greet(); // undefined
```

* 7. In Event Handlers

* this refers to the element that triggered the event.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
    console.log(this); // The button element
});
```


* 8. Explicit Binding (call, apply, and bind)
You can explicitly set the value of this using call, apply, or bind.

* call: Invokes a function with a specific this value and arguments provided individually.
* apply: Similar to call, but arguments are passed as an array.
* bind: Returns a new function with this permanently set to the specified value.

```javascript
const person = {
    name: "Alice",
};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

greet.call(person, "Hello"); // Outputs: Hello, Alice
greet.apply(person, ["Hi"]); // Outputs: Hi, Alice

const boundGreet = greet.bind(person);
boundGreet("Hey"); // Outputs: Hey, Alice
```





**[⬆ Back to Top](#table-of-contents)**

### 7. How to iterate over a JavaScript object ?
* Using for loop
```javascript
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };

        for (let key in exampleObj) {
            if (exampleObj.hasOwnProperty(key)) {
                value = exampleObj[key];
                console.log(key, value);
            }
        }
    }
    iterateObject();
```
* Using Object.entries() and map() Method
```javascript
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };

        Object.entries(exampleObj).map(entry => {
            let key = entry[0];
            let value = entry[1];
            console.log(key, value);
        });
    }
    iterateObject();
```

* Using forEach() and object.keys() Method
```javascript
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };

        Object.keys(exampleObj).forEach(key => {
            const value = exampleObj[key];
            console.log(`${key}: ${value}`);
        });

    }
    iterateObject();
```





**[⬆ Back to Top](#table-of-contents)**

### 8. Is Javascript Synchronous or Asynchronous ?

JavaScript is **single-threaded**.

JavaScript is both synchronous and asynchronous, depending on the context in which the code is executed. Here's an explanation:

**Synchronous by Default**
```javascript
    console.log("First");
    console.log("Second");
    console.log("Third");
```
**Asynchronous Behavior**
JavaScript supports asynchronous programming to handle tasks that might take time (e.g., fetching data, reading files, or waiting for user input) without blocking the main thread.

This is achieved using:

* Callbacks
* Promises
* async/await

**Callback**
```javascript
    setTimeout(() => {
    console.log("Callback executed");
    }, 1000);
```

**Promises**
```javascript
    fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

**async/await**
```javascript
    async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    }

    fetchData();
```

**[⬆ Back to Top](#table-of-contents)**

### 9. What is Strict mode in javascript?

Strict mode in JavaScript is a feature that makes the language's behavior more predictable and secure by applying stricter parsing and error handling. It helps developers write cleaner, less error-prone code by eliminating silent errors and encouraging best practices.


**Enable Strict Mode Globally:**
```javascript
   "use strict";

    x = 10; // Error: x is not defined
```

**Enable Strict Mode Locally:**
Note: It is not recommended to enable strict mode globally in mixed environments, as it may affect third-party scripts or libraries that don't use strict mode.


```javascript
function myFunction() {
    "use strict";
    y = 20; // Error: y is not defined
}

myFunction();

```

**Key Features of Strict Mode**

* 1. Prevents the Use of Undeclared Variables

Variables must be explicitly declared with let, const, or var.
```javascript

"use strict";
x = 10; // Error: x is not defined
```

* 2. Disallows Duplicate Parameter Names

Functions cannot have parameters with the same name.

```javascript
"use strict";
function example(a, a) { // Error: Duplicate parameter name not allowed
  return a;
}
```

* 3. Eliminates this Binding for Global Objects

In strict mode, this in a function defaults to undefined, instead of the global object.

```javascript

"use strict";
function showThis() {
  console.log(this);
}
showThis(); // Output: undefined
```

* 4. Prevents Assignment to Read-Only Properties

Assigning a value to a read-only property throws an error.
```javascript
"use strict";
const obj = Object.freeze({ name: "John" });
obj.name = "Doe"; // Error: Cannot assign to read-only property
```

* 5. Disallows with Statements

The with statement is prohibited because it makes the scope ambiguous.
```javascript
"use strict";
with (Math) { // Error: Strict mode code may not include a with statement
  console.log(PI);
}
```

* 6. Catches Silent Errors

Many silent errors in non-strict mode throw exceptions in strict mode.
```javascript
"use strict";
delete Object.prototype; // Error: Cannot delete property 'prototype'
```

* 7. Prohibits Octal Literals

Octal literals are not allowed in strict mode.
```javascript
"use strict";
const num = 010; // Error: Octal literals are not allowed
```

* 8. Improved eval Behavior

Variables declared inside eval do not affect the surrounding scope.
```javascript
"use strict";
eval("var x = 10;");
console.log(x); // Error: x is not defined
```

* 9. Disallows Deleting Plain Names

You cannot delete a variable, function, or object declared in strict mode.
```javascript
"use strict";
let x = 10;
delete x; // Error: Cannot delete variable declared with let
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```



**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```




**[⬆ Back to Top](#table-of-contents)**

### 10. XYZ

```javascript
   console.log('xyz');
```









101. ### JavaScript Calculator
Write a program to make a calculator using simple javascript, html, css.
```javascript
   console.log('Calculator');
```




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


112.

113.

114.
