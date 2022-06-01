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

function calculateResult(operation){

    if(operation !== 'ADD' && 
       operation !== 'SUBTRACT' &&
       operation !== 'MULTIPLY' && 
       operation !== 'DIVIDE') {
        return;
    }

    const inputNumber = enteredInput();
    const initialValue = currentResult;
    let mathematicalOperator;
    if(operation === 'ADD'){
        currentResult += inputNumber;
        mathematicalOperator = '+';
    } else if( operation === 'SUBTRACT'){
        currentResult -= inputNumber;
        mathematicalOperator = '-';
    } else if( operation === 'MULTIPLY'){
        currentResult *= inputNumber;
        mathematicalOperator = '*';
    } else if( operation === 'DIVIDE'){
        currentResult /= inputNumber;
        mathematicalOperator = '/';
    }
    
    calcLog(mathematicalOperator, initialValue, inputNumber);
    logger(operation, initialValue, inputNumber, currentResult);
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
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
   calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
