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
    })
})

        























