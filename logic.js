//11: Write a function that takes a number as input and returns the sum of its digits without converted to string.

function numberToArray(number) {
    const digitArray = [];

    // Extract digits using modulo and division
    while (number > 0) {
        const digit = number % 10;
        digitArray.unshift(digit); // Add the digit to the beginning of the array
        number = Math.floor(number / 10);
    }

    let sumOfNumber = digitArray.reduce((accum, currentValue)=> accum + currentValue, 0);

    return sumOfNumber;

}
const resultArray = numberToArray(12345);
console.log(resultArray);

// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2)=>{
    if(arr1.length !== arr2.length){
        return false
    }
    return arr1.every((val, ind)=> val === arr2[ind])
}
 
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: true 
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false 
// console.log(arraysAreEqual([1], [1, 2])); // Output: false
// console.log(arraysAreEqual([], [])); // Output: true

//find a factorial of a number

const factorial = (number)=>{
    let fact = 1;
    for (let i = 1; i <=number; i++) {
        fact = fact * i
    }
    return fact
}

// console.log(factorial(0)) // output 1
// console.log(factorial(3)) // output 6
// console.log(factorial(4)) // output 24

// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (arr) => Math.max(...arr)
const findMin = (arr) => Math.min(...arr)

// console.log(findMax([3,5,6,7,98,9]))
// console.log(findMin([3,5,6,7,98,9]))

//write a function to check a string is palindrome or not. ==================

const isPalindrome = (string)=>{
    const splitedString = string.toLowerCase().replace(/\W/g, '') // capital W mean a-z small or capital or number to chhod ke sab remove krna string se
    let rev_string = splitedString.split("").reverse().join("")
    return rev_string === string ? true : false
}

// console.log(isPalindrome("A man, a plan, a canel, Panamea"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

//write a function to sort an array of numbers in an ascending order. ==================

const array = [5, 3, 1, 8, 10, 15];

const sortArray = (numArr)=>{
    return numArr.sort((a,b)=> a -b)
} 

// console.log(sortArray(array))

//======================= Count Occurrences of character ================================

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

// console.log(countCharacter("MissIssippiiiII", "i"))

//===================== create a hash tag generator function============================

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


// ======================find the longest word in string=================================

const sentence = "I my name is naveen and what's your name";

const findLongestWord = (string)=>{
    let splitedString =  string.split(" ")

    return splitedString.reduce((accum, currentWord)=>(
        currentWord.length > accum.length ? currentWord : accum
    ))
}

// console.log(findLongestWord(sentence))