let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {  
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
      updateScreen(currentInput)
    })
})

const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number
    } else {
        currentInput += number
    }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
       inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}
const equalSign = document.querySelector('.equal-sign')
    equalSign.addEventListener('click', () => {
        calculate()
        updateScreen(currentInput)
    })
const calculate = () => {
    let result = 0
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}
const allClear = document.querySelector('.all-clear')
   allClear.addEventListener('click', () => {
    currentInput = '0'
    calculationOperator = ''
    updateScreen(currentInput)
   })
const Percentage = document.querySelector(".percentage")
     Percentage.addEventListener("click", (event) => {
          getPercentage(event.target.value)
          updateScreen(currentInput)
       })
   
const getPercentage = (percentage) => {
    let result = parseFloat(currentInput) / 100 
    currentInput = result.toString()
}
const decimals = document.querySelector(".decimal")
    decimals.addEventListener("click", () => {
    currentInput = currentInput + '.'
      updateScreen(currentInput)
    })
