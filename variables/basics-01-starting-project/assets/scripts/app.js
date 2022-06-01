const initialResult = 0;

let currentResult = initialResult;
let logEntries = []; 

function enteredInput(){
    return parseInt(userInput.value);
}

function calcLog(operator, resultBfrCal, newNumber){
    const calcDescription = `${resultBfrCal} ${operator} ${newNumber}`;
    outputResult(currentResult, calcDescription);
}

function logger(operation, prevResult, newNumber, result){
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        newNumber: newNumber,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult + inputNumber;
    calcLog('+', initialValue, inputNumber);
    logger('ADD', initialValue, inputNumber, currentResult);
}

function subtract(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult - inputNumber;
    calcLog('-', initialValue, inputNumber);
    logger('SUBTRACT', initialValue, inputNumber, currentResult);
}

function multiply(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult * inputNumber;
    calcLog('*', initialValue, inputNumber);
    logger('MULTIPLY', initialValue, inputNumber, currentResult);
}

function divide(){
    const inputNumber = enteredInput();
    const initialValue = currentResult;
    currentResult = currentResult / inputNumber;
    calcLog('/', initialValue, inputNumber);
    logger('DIVIDE', initialValue, inputNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
