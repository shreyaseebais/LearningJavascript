//////    Fibonacci series   //////////
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