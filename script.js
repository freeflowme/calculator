/*
let input1 = prompt('Please enter a number');
let x = parseFloat(input1);
let operator = prompt("Please enter +, -, *, or /");
let input2 = prompt('Please enter a number');
let y = parseFloat(input2);
*/

let stack = [];
let x = [];
let operator = [];
let y = [];

//basic calculator functions
function add(x, y) {
    return x + y; 
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y; 
}

//call coresponding basic function 
function operate(x, operator, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        return
    } else if(operator === "+") {
        return add(x, y);
    } else if(operator === "-") {
        return subtract(x, y);
    } else if(operator === "*") {
        return multiply(x, y);
    } else if(operator === "/") {
        return divide(x, y);
    }
}

/*
console.log(operate(x, operator, y));
*/

//button functionality
const numBtns = document.querySelectorAll(".numBtn");
    numBtns.forEach(numBtn => {
        numBtn.addEventListener("click", () => {
            const dsplyVal = document.createElement("div");
            dsplyVal.textContent = numBtn.textContent;
            stack.push(dsplyVal.textContent);
            document.querySelector("#display").appendChild(dsplyVal);

            console.log(stack);
        })
    })

const decimal = document.querySelector("#dcmlBtn");
    dcmlBtn.addEventListener("click", () => {
        const dcmlVal = document.createElement("div");
        dcmlVal.textContent = dcmlBtn.textContent;
        stack.push(dcmlVal.textContent);
        document.querySelector("#display").appendChild(dcmlVal);

        console.log(stack);
    })

const opBtns = document.querySelectorAll(".opBtn");
    opBtns.forEach(opBtn => {
        opBtn.addEventListener("click", () => {
            const opVal = document.createElement("div");
            if(opBtn.id === "addBtn") {
                opVal.textContent = addBtn.textContent;
            } else if(opBtn.id === "subBtn") {
                opVal.textContent = subBtn.textContent;
            } else if(opBtn.id === "multBtn") {
                opVal.textContent = multBtn.textContent;
            } else if(opBtn.id === "divBtn") {
                opVal.textContent = divBtn.textContent;
            }
            document.querySelector("#display").appendChild(opVal);

            const num1 = Number(stack.join(""));
            while(stack.length > 0) {
                stack.shift(); 
            }
            x.push(num1);
            operator.push(opVal.textContent);

            console.log(x);
            console.log(operator);
        })
    })

const equals = document.querySelector("#equalsBtn");
    equalsBtn.addEventListener("click", () => {
        const num2 = Number(stack.join(""));
            while(stack.length > 0) {
                stack.shift(); 
            }
            y.push(num2);
            
            console.log(y);
    })


const clear = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", () => {
        while(stack.length > 0) {
            stack.shift();
        }
        while(display.firstChild) {
            display.firstChild.remove();
        }
        console.log(stack);
    })