/////     NESTED ARRAY  ///////
const nestedArray = [[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]];

//Method1 
var result = nestedArray.flat(Infinity);
console.log("Using Array.flat() : ", result);


//Method2
result = flattenTheArray(nestedArray);
console.log("Using for loop: ", result);

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


//Method 3 Reduce method
result = flattenTheArrayUsingReduce(nestedArray);
console.log("Using reduce method: ", result);

function flattenTheArrayUsingReduce(arr){
    return arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item)? flattenTheArrayUsingReduce(item):item)
    }, []); 
}