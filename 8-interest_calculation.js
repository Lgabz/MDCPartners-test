function interestCalculation (initialCapital, interestRate, investimentTime) {

    if(!initialCapital && !interestRate && !investimentTime){
        console.log("Please, inform the Initial Capital, Interest Rate and the Investiment Time (in months) in the argument of the function");
    }else if(!initialCapital){
        console.log("Please, inform the Initial Capital in the first argument")
    }else if(!interestRate){
        console.log("Please, inform the Interast Rate in the second argument")
    }else if(!investimentTime){
        console.log("Please, inform the Investiment Time (in months) in the last argument")
    }else{

        let interestValueInPercent = interestRate/100;
    
        let result = initialCapital*(1+interestValueInPercent*investimentTime)
    
        console.log(`The final value of your investment is: ${result}`)
    }
}

interestCalculation()