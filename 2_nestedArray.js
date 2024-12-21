console.log('#####Nested Array######');
const nestedArray = [[2,3],[2,6,7,9],87,12,[23,[56,22,[45,66,78]]]];

//Method1 
const result1 = nestedArray.flat(Infinity);
console.log(result);
//Method2
const result2 = flattenTheArray(nestedArray);
console.log(result);

function flattenTheArray(nestedArray){
    let flatArray = [];
    for(let i=0;i<nestedArray.length;i++){
        if(Array.isArray(nestedArray[i])){
            flatArray = flatArray.concat(flattenTheArray(nestedArray[i]))
        }else{
            flatArray.push(nestedArray[i]);
        }
    }
}