function primeNumberCheck (num) {
    let i = 2
    let divisores = 0
    let result = false

    for (let count = 1; count <= num; count++){
        if (num % count == 0){
            divisores++
        }
    }
    if(!num){
        console.log(`
        please, inform a number.
        `);
    }else if( divisores == 2){
        console.log(`
        ${num} is a prime number
        `);
    }else{
        console.log(`
        ${num} is not a prime number
        `);
    }
}
function primeNumberValidation (num) {
    let i = 2
    let divisores = 0
    let result = false

    for (let count = 1; count <= num; count++){
        if (num % count == 0){
            divisores++
        }
    }
    if( divisores == 2){
        result = true;
        return result;
    }else{
        result = false
        return result;
    }
}
function tenFirstPrimeNumbers () {
    let arrayPrimeNumbers = [];

    for (let i = 2; i < 30; i++) {      
        if(primeNumberValidation(i) == true){
            arrayPrimeNumbers.push(i)
        }
}
        console.log(
        `
        There are the first 10 prime numbers: ${arrayPrimeNumbers}
        `)
}

primeNumberCheck()
tenFirstPrimeNumbers()