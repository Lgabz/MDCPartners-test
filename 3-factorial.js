function factorial (number) {

    let factorialSequence = []
    let result = 1

    for (let i = 1; i <= number; i++){
        result = result * i;
        factorialSequence.push(i)
    }
    console.log(result);
}

factorial()