function vowelCounter (str) {

    if(!str){
        console.log("Please, write a sentence in the function argument so I can count the vowels")
    }else if(str.length > 0){
        let regex = /[aeiouà-ú]/gi
        let vowels = str.match(regex)
        let value = vowels.length
    
        console.log(value);
    }
}

vowelCounter('')