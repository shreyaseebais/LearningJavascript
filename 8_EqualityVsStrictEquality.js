//////            ==   versus   ===                  //////////

console.log("_______________________________");
console.log("Object and Primitive Comparison")
console.log("_______________________________");
const obj = { key: 'value' };
console.log(obj == '[object Object]'); // true
console.log(obj === '[object Object]'); // false

console.log("__________________________");
console.log("Equality and Type Coercion")
console.log("__________________________");
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false

console.log("____________________________");
console.log("Complex Coercion with Arrays")
console.log("____________________________");
console.log([] == 0); // true
console.log([] === 0); // false
console.log([1] == 1); // true
console.log([1] === 1); // false
console.log([1, 2] == '1,2'); // true
console.log([1, 2] === '1,2'); // false

console.log("___________________________________________");
console.log("Implicit Conversion with null and undefined")
console.log("___________________________________________");
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(undefined == 0); // false
console.log(undefined === 0); // false

console.log("___________________");
console.log("Edge Cases with NaN");
console.log("___________________");
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true

console.log("___________________");
console.log("Comparing Functions")
console.log("___________________");
function funcA() {}
function funcB() {}
console.log(funcA == funcB); // ?
console.log(funcA === funcB); // ?
console.log(funcA == funcA); // ?
console.log(funcA === funcA); // ?

console.log("_____________________________");
console.log("String and Number Comparisons")
console.log("_____________________________");
console.log('42' == 42); // true
console.log('42' === 42); // false
console.log('0x2A' == 42); // true
console.log('0x2A' === 42); // false

console.log("______________");
console.log("Dynamic Values");
console.log("______________");
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

console.log("__________________");
console.log("Symbol Comparisons");
console.log("__________________");
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 )
console.log(sym2)
console.log(sym1 == sym2); // false
console.log(sym1 === sym2); // false
console.log(sym1 == sym1); // true
console.log(sym1 === sym1); // true

console.log("_______________________________");
console.log("Object to Primitive Conversion");
console.log("_______________________________");
const obj1 = { valueOf: () => 1 };
const obj2 = { toString: () => '1' };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

