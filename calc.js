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

let firstNumber;
let secondNumber;
let operator;

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

const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        screen.textContent += button.innerText;
    })
});
