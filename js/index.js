
const screen=document.getElementById("screen");
const btns=document.querySelectorAll(".btn")

function calculate(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if (b === 0) {
                return "Error";
            }
            return a / b;
        },
    };

    const operate = (a, operator, b) => {
        a = parseFloat(a);
        b = parseFloat(b);
        return operators[operator](a, b);
    };

    const tokens = expression.split(/([+\-*/])/);
    let result = tokens.shift();
    while (tokens.length > 0) {
        const operator = tokens.shift();
        const nextNumber = tokens.shift();
        result = operate(result, operator, nextNumber);
        if(result=="Error"){
            break;
        }
    }
    
    return result;
}

function operation(btnValue){
    if(btnValue === "Ac" ){
        screen.innerHTML="";
    }else if(btnValue === "Del"){
        screen.innerHTML=screen.innerHTML.slice(0,-1)
    }else if(btnValue == "="){
            screen.innerHTML=calculate(screen.innerHTML)
        
    }else{
        screen.innerHTML+=btnValue;
    }
}

btns.forEach((btn)=>{
    let buttonValue=btn.value;
    btn.addEventListener("click",()=>{
        operation(buttonValue)
    })
})

