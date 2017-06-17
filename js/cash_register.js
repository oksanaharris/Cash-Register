/*jshint esversion: 6 */
// var num7 = document.getElementById("7");
// num7.addEventListener("click", addToDisplay);

//when pressing number buttons (1-9,0,00 and ., the values should be tacked onto the end of the string displayed in the display

//when pressing operator buttons (/,*,-,+), the values displayed in the display, need to be turned into a signle number and stored to be used as the first parameter for that operator, and the display should be cleared 

//then the whole display needs to be captured whenever an action button is clicked (get balance, deposit cash, withdraw cash;)

//function to add numbers to the display when pressing (1-0,0,00, and .)

window.cashRegister = (function(){

  const calc = calculator;

  var display = "0";
  // var parameter1 = '';
  // var parameter2 = '';
  var operator = '';
  // var result;
  var balance = 0;
  var resultPrinted;
  var equalRun;

  var displayEl = document.getElementById("display");
  displayEl.innerHTML = display;

  var nums = document.getElementsByClassName('number');
  for (let i = 0; i < nums.length; i ++){
    nums[i].addEventListener("click", addToDisplay);
  }
  // this adds event listeners to multiple elements and references the function name for amending the display

  var ops = document.getElementsByClassName('operatorBtn');
  for (let i = 0; i < ops.length; i ++){
    ops[i].addEventListener("click", operation);
  }

  var equal = document.getElementById('=');
  equal.addEventListener("click", calculate);

  var clear = document.getElementById('clear');
  clear.addEventListener("click", clearDisplay);

  var dep = document.getElementById('deposit');
  dep.addEventListener("click", depositFunc);

  var withdr = document.getElementById('withdraw');
  withdr.addEventListener("click", withdrawFunc);

  var getBalance = document.getElementById('balanceBtn');
  getBalance.addEventListener("click", getBalanceFunc);

  function getBalanceFunc (){
    displayEl.innerHTML = balance;
    console.log(balance);
  }

  function depositFunc(){
    balance += Number(display);
    display = "";
    displayEl.innerHTML = display;
    console.log(balance + ' ' + display);
  }

  function withdrawFunc(){
    balance -= Number(display);
    display = "";
    displayEl.innerHTML = display;
  }

  function addToDisplay (e){
    if (resultPrinted === false){ 
      if (display === "0"){
      display = e.target.value;
      displayEl.innerHTML = display; 
      }
      else {
        display += e.target.value;
        displayEl.innerHTML = display; 
      }
    }
    else{
      display = e.target.value;
      displayEl.innerHTML = display;
      resultPrinted = false; 
    }
  }

  function clearDisplay () {
    display = "0";
    calc.loadTotal(Number(display));
    displayEl.innerHTML = display;
    // parameter1 = "";
    // parameter2 = "";
    operator = "";
    // result = "";
  }

  function operation (e){
    
    if (operator === ""){
      // parameter1 = display;
      calc.loadTotal(Number(display));
      display = "";
    }

    else if (operator === "="){
      calc.loadTotal(Number(display));
      display = calc.getTotal();
      resultPrinted = true;
    }
      // displayEl.innerHTML = display;
      // operator = e.target.id;
    else {
      // parameter2 = display;
      // result = calculator.compute(parameter1, parameter2, operator);

      switch(operator){
      case "+":
        calc.add(Number(display));
        break;
      case "-":
        calc.subtract(Number(display));
        break;
      case "*":
        calc.multiply(Number(display));
        break;
      case "/":
        calc.divide(Number(display));
        break;
      }

      display = calc.getTotal();
      resultPrinted = true;
      calc.loadTotal(Number(display));
      
    }
    displayEl.innerHTML = display;
    operator = e.target.id;
  }

  function calculate(e){
    // parameter2 = display;
    // result = calculator.compute(parameter1, parameter2, operator);
    switch(operator){
      case "+":
        calc.add(Number(display));
        break;
      case "-":
        calc.subtract(Number(display));
        break;
      case "*":
        calc.multiply(Number(display));
        break;
      case "/":
        calc.divide(Number(display));
        break;
      }
    display = calc.getTotal();
    displayEl.innerHTML = display;
    // parameter1 = '';
    equalRun = true;
    operator = e.target.id;
    // console.log('parameter1: ' + parameter1 + ' operator: ' + operator + 'parameter2: ' + parameter2 + ' result: ' + result);
  }
})();
