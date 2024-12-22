/////////// Chain Calculator ///////////////

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
  
  
  
  