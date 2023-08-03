function calculate(num1, sign, num2) {
    let result = 0;

    if(sign == '+'){
        result = num1+num2
    }
    if(sign == '-'){
        result = num1-num2
    }
    if(sign == '*'){
        result = num1*num2
    }
    if(sign == '/'){
        result = num1/num2
    }

    console.log(`${num1} ${sign} ${num2} = ${result}`)
}


calculate (5, '*', 2)