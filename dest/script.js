"use strict";
let Inputfield = document.getElementById("InputField");
function handleClick(value) {
    const operators = ["+", "-", "*", "/"];
    const sliceChart = Inputfield.value.slice(-1);
    if (value === `C`) {
        Inputfield.value = "";
    }
    else if (operators.includes(sliceChart) && operators.includes(value)) { }
    else if (value === "." && Inputfield.value.includes(".")) { }
    else {
        Inputfield.value += value;
    }
}
// Using eval can be dangerous and lead to security vulnerabilities
/* function handleCalculate(){
  let result = eval(Inputfield.value)
  Inputfield.value = result
}

*/
function handleCalculate() {
    const inputValue = Inputfield.value;
    const validInput = inputValue.replace(/[^-()\d/*+.]/g, "");
    const result = Function(`'use strict'; return (${validInput})`)();
    Inputfield.value = result;
}
