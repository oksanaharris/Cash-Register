/*jshint esversion: 6 */
// `( display )` is the primary ui that prints all results  
// `[clear]` will clear the display  
// `[get balance]` will display the current balance  
// `[deposit cash]` will add the amount currently in the `( display )` to the cash register, then clears the display  
// `[withdraw cash]` will remove the amount currently in the `( display )` to the cash register, then clears the display  
// The module should be named `Calculator` and should only be concerned with performing mathematical computation. 


var calculator = (function(){

  let memory = 0;
  
  let total = 0;

  function loadTotal(num){
    validate(num);
    total = num;
    return total;
  }

  function getTotal (){
    return total;
  }

  function add (num){
    validate(num);
    total += num;
    return total;
  }

  function subtract (num){
    validate(num);
    total -= num;
    return total;
  }

  function multiply (num){
    validate(num);
    total *= num;
    return total;
  }

  function divide (num){
    validate(num);
    total /= num;
    return total;
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
    return memory;
  }

  function clearMemory(){
    memory = 0;
    return memory;
  }

  function validate(num){
    if (typeof num !== 'number'){
      throw new Error ("Please enter a valid number.");
    }
  }

  return {
    loadTotal: loadTotal,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };
})();
