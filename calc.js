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
            return number1 / number2;
    }
}

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        currentOperator = operator.value;
        console.log(currentOperator);
        clicked = true;
        display.textContent = currentOperator;
    });
});

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#screen');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(clicked === true) {
            secondNumber += number.value;
            console.log(`secondnumber: ${secondNumber}`);
            display.textContent = secondNumber;
        }else {
            firstNumber += number.value;
            console.log(`firstnumber: ${firstNumber}`);
            display.textContent = firstNumber;
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
    display.textContent = result;
});

const clearScr = document.querySelector('.clear');

clearScr.addEventListener('click', ()=> {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
})