const initialResult = 0;

let currentResult = initialResult;

function enteredInput(){
    return parseInt(userInput.value);
}

function calcLog(operator, resultBfrCal, newNumber){
    const calcDescription = `${resultBfrCal} ${operator} ${newNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult + inputNumber;
    calcLog('+', initialValue, inputNumber);
}

function subtract(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult - inputNumber;
    calcLog('-', initialValue, inputNumber);
}

function multiply(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult * inputNumber;
    calcLog('*', initialValue, inputNumber);
}

function divide(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult / inputNumber;
    calcLog('/', initialValue, inputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
