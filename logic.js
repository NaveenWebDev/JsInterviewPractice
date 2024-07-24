//====================================== Count Occurrences of character ======================================

const countCharacter = (string, char)=>{
    string = string.toUpperCase();
    char = char.toUpperCase();
    let splitedSting = string.split("");

    let totalChar = 0
    splitedSting.map((val, i)=>(
        (val === char)? totalChar++ : totalChar
    ))
    
    return totalChar
}

console.log(countCharacter("MissIssippiiiII", "i"))

//====================================== create a hash tag generator function==================================

const string = "my name is naveen sharma"

const hashTagGenerator = (string)=>{
    if(string.length >= 280 || string.trim().length === 0){
        return false;
    }
    let splitedSting = string.split(" ");
    let capitalizeArray = splitedSting.map((val, ind)=>(
        val.replace(val[0], val[0].toUpperCase())
    )) 
    let hashedString = `#${capitalizeArray.join("")}`
    return hashedString
    
}
// console.log(hashTagGenerator(string))


// =======================================find the longest word in string======================================

const sentence = "I my name is naveen and what's your name";

const findLongestWord = (string)=>{
    let splitedString =  string.split(" ")

    return splitedString.reduce((accum, currentWord)=>(
        currentWord.length > accum.length ? currentWord : accum
    ))
}

// console.log(findLongestWord(sentence))