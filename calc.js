function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let clicked = false;
//let userTyping = false;

function operate(number1,operation,number2) {
    if(operation === '+') {
        return add(number1,number2);
    }
    if(operation === '-') {
        return subtract(number1,number2);
    }
    if(operation === '*') {
        return multiply(number1,number2);
    }
    if(operation === '/') {
        return divide(number1,number2);
    }
}

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        currentOperator = operator.value;
        console.log(currentOperator);
        clicked = true;
    });
});

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        //userTyping = true;
        if(clicked === true) {
            secondNumber += number.value;
            console.log(`secondnumber: ${secondNumber}`);
        }else {
            firstNumber += number.value;
            console.log(`firstnumber: ${firstNumber}`);
        }
    });
});

const equalTo = document.querySelector('.equals');

equalTo.addEventListener('click', ()=> {
    console.log(operate(parseInt(firstNumber),currentOperator,parseInt(secondNumber)));
    clicked = false;
    firstNumber = '';
    secondNumber = '';
});