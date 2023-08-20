const displayCurrent = document.querySelector('#currentDisplay');
const displayPrevious = document.querySelector('#previousDisplay');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = '';
displayCurrent.textContent = 0;

function operate(number1,operation,number2) {
    switch(operation){
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if(number2 === 0){
                return "can't divide by zero";
            }else{
                return number1 / number2;
            }
    }
}

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        if(firstNumber && secondNumber){
            displayResult();
        }
        firstNumber = secondNumber;
        console.log(`firstnumber ${firstNumber}`);
        currentOperator = operator.value;
        displayPrevious.textContent = secondNumber + currentOperator;
        secondNumber = '';
        console.log(`secondnumber ${secondNumber}`);
        equalTo.disabled = false;
        dot.disabled = false;
    });
});

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        secondNumber += number.value;
        displayCurrent.textContent = secondNumber;
        console.log(`secondnumber ${secondNumber}`);
    });
});

const backSpace = document.querySelector('#delete');
backSpace.addEventListener('click', () => {
    displayCurrent.textContent = displayCurrent.textContent.substring(0,displayCurrent.textContent.length -1);
    secondNumber = displayCurrent.textContent;
});

const dot = document.querySelector('.dot');
dot.addEventListener('click', ()=> {
    secondNumber += dot.value;
    displayCurrent.textContent = secondNumber;
    if(displayCurrent.textContent.includes('.')){
        dot.disabled = true;
    }
});

const equalTo = document.querySelector('.equals');
equalTo.disabled = true;
equalTo.addEventListener('click', ()=> {
    displayResult(); 
    equalTo.disabled = true;
});

function displayResult() {
    result = operate(parseFloat(firstNumber),currentOperator,parseFloat(secondNumber));
    displayCurrent.textContent = result;
    displayPrevious.textContent = firstNumber+' '+currentOperator+' '+secondNumber;
    secondNumber = result;
    firstNumber = '';
    console.log(`resultsecondnumber ${secondNumber}`);
    console.log(`resultfirstnumber ${firstNumber}`);
}

const clearScr = document.querySelector('.clear');

clearScr.addEventListener('click', ()=> {
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    equalTo.disabled = false;
    dot.disabled = false;
});