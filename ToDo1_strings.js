// 1. Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, 
// but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", 
// return "PlayThatFunkyMusic"

function joinStr(str){
    var jointArr = str.split(" ");
    var jointStr = jointArr.join("");
    return jointStr;
}

var testStr = " Pl ayTha tF u nkyM usi c ";
console.log("#1:",joinStr(testStr));

// 2. Get Digits
// Create a JavaScript function that given a string, returns the integer made from 
// the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return 
// the number 1357924680.

function returnInt(str){
    breakArr = str.split("");
    //console.log(breakArr);
    intStr = '';
    for(var i=0;i<breakArr.length;i++){
        if(breakArr[i]%1 == 0){
            intStr += breakArr[i];
        }
    }
    return intStr;
}

// test
var testStr2 = "0s1a3y5w7h9a2t4?6!8?0";
console.log("#2:",returnInt(testStr2));

// 3. Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letters only, capitalized). Given " there's no free lunch - 
// gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str){
    breakArr = str.split(" ");
    var acrArr = [];
    //console.log(breakArr);
    for(var i=0; i<breakArr.length; i++){
        wordArr = breakArr[i].split("");
        acrArr.push(wordArr[0]);
    }
    acrStr = acrArr.join("");
    return acrStr;
}

// test
var testStr3 = "Live from New York, it's Saturday Night!";
console.log('#3:',acronym(testStr3));

// 4. Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function ctNospace(str){
    breakArr = str.split(" ");
    charCt = 0;
    for(var i=0; i<breakArr.length; i++){
        charCt = charCt + breakArr[i].length;
    }
    return charCt;
}

// test
var testStr4 = "Honey pie, you are driving me crazy";
console.log('#4:',ctNospace(testStr4));

// 5. Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the 
// length from the array.

function clipArr(arr, minLen){
    newArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>=minLen){
            //console.log('entered if');
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// test
var testStr5 = ['bottle','home','water','stereo','fork'];
console.log('#5:',clipArr(testStr5, 5));