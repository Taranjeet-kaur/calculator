const buttons = document.querySelectorAll(".calc-btn")
const display = document.querySelector("#results")
const backspaceButton = document.getElementById("backspace");
console.log("Backspace button found:", backspaceButton);

let currentInput = ""; // Stores the number being entered
let previousInput = "";// Stores the first number before an operator
let operator = "";// Stores the selected operator

buttons.forEach(button => {
    button.addEventListener("click", ()=>{

        //use the data attribute if it exists; otherwise use text content
        const value = button.dataset.value || button.textContent.trim()
        // console.log(value);

        if(!isNaN(value) || value == '.'){
            currentInput += value.trim()
            display.textContent = currentInput
            console.log("Current Input:", currentInput); // Debugging
        } else if(button.id === "clear"){
            currentInput = ""
            previousInput = ""
            operator = ""
            display.textContent = ""
            console.log('button', value);
        } else if(button.id === "backspace"){
    
            currentInput =  currentInput.slice(0, -1)
            display.textContent = currentInput
        }
    })
})

