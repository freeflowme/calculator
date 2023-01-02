/*
let input1 = prompt('Please enter a number');
let x = parseFloat(input1);
let operator = prompt("Please enter +, -, *, or /");
let input2 = prompt('Please enter a number');
let y = parseFloat(input2);
*/

let stack = [];
let x = stack[0];
let operator = stack[1];
let y = stack[2];

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
            
            let num = Number(stack.join(""));
            while(stack.length > 0) {
                stack.shift();
            }
            stack.push(num);
            stack.push(opVal.textContent);

            console.log(stack);

            document.querySelector("#display").appendChild(opVal);
    })
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