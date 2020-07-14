const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
const oprt = document.querySelectorAll(".operator")
const equ = document.querySelector(".ecual-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")

let prevNumber = ''
let calcuationOpr = ''
let currentNum = '0'

decimal.addEventListener('click', (event) => {
    //console.log('work')
    //console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNum)
})

inputDecimal = (dot) => {
    if (currentNum.includes('.')){
        return
    }
    currentNum += dot
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNum)
    //console.log('berhasil')
})

const clearAll = () => {
    prevNumber = ''
    calcuationOpr = ''
    currentNum = '0'
}

const calculate = () => {
    let result = ''
    switch(calcuationOpr){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNum)
            break
        case "-":
            result = prevNumber - currentNum
            break
        case "*":
            result = prevNumber * currentNum
            break
        case "/":
            result = prevNumber / currentNum
            break
        default:
            break
    }
    currentNum = result
    calcuationOpr = ''
}


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNum(event.target.value)
        updateScreen(currentNum)
    })
})

oprt.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOprt(event.target.value)
        console.log(event.target.value)
    })
})

equ.addEventListener("click", () => {
    calculate()
    updateScreen(currentNum)
    console.log(currentNum)
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNum = (number) => {
    if (currentNum === '0'){
        currentNum = number
    } else {
        currentNum += number
    }
}

const inputOprt = (operator) => {
    if (calcuationOpr === ''){
        prevNumber = currentNum
    }    
    calcuationOpr = operator
    currentNum = ''
}
