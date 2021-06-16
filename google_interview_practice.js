// Interview question 1

// Given:
arr1 = [1,3,6,4,9,5];
desiredSum = 8;
// Find two values in the array that equal the sum

// Initial solution:
function findSumSet(arr,x){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==x){
                return true;
            }
        }
    }
    return false;
}

// test
console.log(findSumSet(arr1,desiredSum));
// solution is very slow