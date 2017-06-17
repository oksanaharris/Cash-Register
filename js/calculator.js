/*jshint esversion: 6 */
// `( display )` is the primary ui that prints all results  
// `[clear]` will clear the display  
// `[get balance]` will display the current balance  
// `[deposit cash]` will add the amount currently in the `( display )` to the cash register, then clears the display  
// `[withdraw cash]` will remove the amount currently in the `( display )` to the cash register, then clears the display  
// The module should be named `Calculator` and should only be concerned with performing mathematical computation. 


var calculator = (function(){

  // let balance = 0;

  // let display = 0;

  // function getBalance (){
  //   return balance;
  // }

  // function add (num){
  //   validate(num);
  //   total += num;
  //   return total;
  // }

  // function subtract (num){
  //   validate(num);
  //   total -= num;
  //   return total;
  // }

  // function multiply (num){
  //   validate(num);
  //   total *= num;
  //   return total;
  // }

  // function divide (num){
  //   validate(num);
  //   total /= num;
  //   return total;
  // }

  function compute(num1, num2, op){
    switch(op){
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "*":
        result = Number(num1) * Number(num2);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        break;
    }
    return result;
  }

  // function deposit (num){
  //   validate(num);
  //   balance += num;
  //   display = 0; //needs to clear the display
  //   return balance;
  // }

  // function withdraw (num){
  //   validate(num);
  //   balance -= num;
  //   display = 0; //needs to clear the display
  //   return total;
  // }

  // function clear(){
  //   display = 0;
  //   return display;
  // }

  // function validate(num){
  //   if (typeof num !== 'number'){
  //     throw new Error ("Please enter a valid number.");
  //   }
  // }

  return {
    // add: add,
    // subtract: subtract,
    // multiply: multiply,
    // divide: divide,
    compute: compute
    // getBalance: getBalance,
    // deposit: deposit,
    // withdraw: withdraw,
    // clear: clear
  };
})();
