/*jshint esversion: 6 */

window.cashRegister = (function(){

  const calc = calculator;

  var display = "0.00";
  var operator = '';
  var balance = 0;
  var resultPrinted;
  var equalRun;
  var lastEntered;

  var displayEl = document.getElementById("display");
  displayEl.innerHTML = display;

  var nums = document.getElementsByClassName('number');
  for (let i = 0; i < nums.length; i ++){
    nums[i].addEventListener("click", addToDisplay);
  }

  var ops = document.getElementsByClassName('operatorBtn');
  for (let i = 0; i < ops.length; i ++){
    ops[i].addEventListener("click", operation);
  }

  var equalEl = document.getElementById('equalBtn');
  equalEl.addEventListener("click", equal);

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
  }

  function depositFunc(){
    balance += Number(display);
    display = "";
    displayEl.innerHTML = display;
  }

  function withdrawFunc(){
    balance -= Number(display);
    display = "";
    displayEl.innerHTML = display;
  }

  function addToDisplay (e){
    if (resultPrinted === true || display === "0.00" || display === ""){
      display = e.target.value;
      resultPrinted = false;
    }
    else {
      if (e.target.value === "."){
        if (display.charAt(display.length-1) === "."){
          display = display; 
        }
        else {
          display += e.target.value;
        }
      }
      else {
        display += e.target.value;
      }
    }
    displayEl.innerHTML = display;
    lastEntered = e.target.value;
  }
  
  function clearDisplay () {
    display = "0.00";
    calc.loadTotal(Number(display));
    displayEl.innerHTML = display;
    operator = "";
  }

  function operation (e){
    
    if (operator === ""){
      calc.loadTotal(Number(display));
      display = "";
    }

    else if (operator === "="){
      calc.loadTotal(Number(display));
      display = parseFloat(calc.getTotal()).toFixed(2);
      resultPrinted = true;
    }

    else {
      if (lastEntered === "+" || lastEntered === "-" || lastEntered === "*" || lastEntered === "/"){
        operator = e.target.id;
        return;
      }
      else {
        calculate();
        display = parseFloat(calc.getTotal()).toFixed(2);
        resultPrinted = true;
        calc.loadTotal(Number(display)); 
      }
    }

    displayEl.innerHTML = display;
    operator = e.target.id;
    lastEntered = e.target.id;
  }

  function equal(e){
    if (lastEntered === "+" || lastEntered === "-" || lastEntered === "*" || lastEntered === "/"){
        operator = e.target.value;
        return;
      }
    else {
      calculate();
      display = parseFloat(calc.getTotal()).toFixed(2);
      displayEl.innerHTML = display;
      operator = e.target.value;
      equalRun = true;
      lastEntered = e.target.value;
    }
  }

  function calculate(){
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
  }
})();
