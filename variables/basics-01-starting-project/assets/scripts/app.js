const initialResult = 0; 
let currentResult = initialResult;

let calculationDescription = `(${initialResult} + 10) * 3 / 2 - 1`;
currentResult = (currentResult + 10) * 3 / 2 - 1;

outputResult(currentResult, calculationDescription);