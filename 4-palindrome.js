function palindrome (str) {
    let regex = /[\W_]/g
    let string = str.split('').reverse().join('').replace(regex,'').toLowerCase();
    let reversedWord = []

    let newString = string.split('').reverse().join('');

    console.log(string);
    console.log(newString);
    
    if (newString == string){
        console.log("this word is a Palindrome");
    }else{
        console.log("this word is not a Palindrome");
    }
}

palindrome("")