//////    Largest number    //////////
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