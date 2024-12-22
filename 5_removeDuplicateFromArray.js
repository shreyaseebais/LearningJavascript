/////      Remove Duplicates from an Array    ///////
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