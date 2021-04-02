// 1. Write a recursive function that, given a number, returns the sum 
// of whole numbers from 1 to that number. 
// Example: rSigma (5) = 15 (1 + 2 + 3 + 4 + 5); 
// rSigma (2.5) = 3 (1 + 2); rSigma (-1) = 0.

function rSigma(num){
    if(num>1){
        //console.log(num);
        return rSigma(num-1) + num;
    }
    return 1;
}

a = 5;
console.log(rSigma(a));

// 2. Recursive Factorial
// Given num, return the product of ints from 1 up to num. 

function rFact(num){
    if(num>1){
        return rFact(num-1)*num;
    }
    return 1;
}

console.log(rFact(a));