let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let clicked = false;

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
        currentOperator = operator.value;
        console.log(currentOperator);
        clicked = true;
        currentDisplay.textContent = currentOperator;
    });
});

const numbers = document.querySelectorAll('.number');
const currentDisplay = document.querySelector('#currentDisplay');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(clicked === true) {
            secondNumber += number.value;
            console.log(`secondnumber: ${secondNumber}`);
            currentDisplay.textContent = secondNumber;
        }else {
            firstNumber += number.value;
            console.log(`firstnumber: ${firstNumber}`);
            currentDisplay.textContent = firstNumber;
        }
    });
});

const equalTo = document.querySelector('.equals');

equalTo.addEventListener('click', ()=> {
    let result = operate(parseFloat(firstNumber),currentOperator,parseFloat(secondNumber));
    console.log(`result: ${result}`);
    clicked = false;
    firstNumber = result;
    console.log(`firstnumber: ${firstNumber}`);
    secondNumber = '';
    resultDisplay.textContent = firstNumber+' '+ currentOperator+' '+secondNumber+' '+result;
});

const clearScr = document.querySelector('.clear');

clearScr.addEventListener('click', ()=> {
    currentDisplay.textContent = '';
    resultDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
})