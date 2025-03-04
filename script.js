const buttons = document.querySelectorAll(".calc-btn")
const display = document.querySelector("#results")

let currentInput = ""; 
let previousInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const value = button.dataset.value || button.textContent.trim()
        if(!isNaN(value) || value ==="."){
             if(value === "." && currentInput.includes(".")){
                 return
            }

            currentInput += value
            display.textContent = currentInput
            console.log(currentInput);
        }
        if(button.id === "backspace"){
            currentInput = currentInput.slice(0, -1)
            display.textContent = currentInput
        }
        if(button.id === "clear"){
            currentInput= ""
            previousInput=""
            display.textContent= ""
        }
        if(button.classList.contains("operator")){
            if(currentInput === "") return 
            previousInput = currentInput
            operator = value
            currentInput = ""
        }
        if(button.id === "equal"){
            if(currentInput === "" || previousInput==="") return
            let num1 = parseInt(previousInput) 
            let num2 = parseInt(currentInput)

            switch (operator) {
                case "+":
                    result = add(num1,num2)
                    break;
                case "-":
                    result = minus(num1,num2)
                    break;
                case "*":
                    result = multiply(num1,num2)
                    break;
                case "/":
                    result = divide(num1,num2)
                    break;
                case "%":
                    result = modulo(num1,num2)
                    break;
                default:
                    break;
            }
            display.textContent = result;
        }
    })
})

let add = (a,b)=>a+b
let minus = (a,b)=> a-b
let multiply = (a,b)=>a*b
let divide = (a,b) => (b === 0? "Really?" : a/b)
let modulo = (a,b) => (b===0? "Undefined" : a%b)
// let divide = (a,b) => {
//     if(b===0){
//       return `Really?`
//         }
        
//     return a/b
// }

// let modulo = (a,b) => {
//     if(b===0){
//         return `Undefined`
//     }
//     return a%b
// }






















