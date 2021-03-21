// 1. Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements 
// moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – 
// move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

console.log('todo2 assignment');
function reverse(arr){
    for(var i=0;i<arr.length/2;i++){
        swapInd = arr.length-(i+1);
        temp = arr[swapInd];
        arr[swapInd]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

//test
arr1 = [1,2,3,4,5];
arr2 = [6,7,8,9];
console.log('#1:',reverse(arr1));
console.log(reverse(arr2));

// 2. Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any 
// values that shift off array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don’t use built-in functions.

// 2b. Second: allow negative shiftBy (shift L, not R).

// 2c. Third: minimize memory usage. With no new array, handle arrays/shiftBys 
// in the millions.

// 2d. Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    // shift right
    if(shiftBy>0){
        for(var n=shiftBy;n>0;n--){
            temp = arr[arr.length-1];
            for(var i=(arr.length-1); i>0; i--){
                arr[i] = arr[i-1];
                // console.log('test',arr);
            }
            arr[0] = temp;
            // console.log('test-outer loop',arr);
        }
    }
    // shift left
    else if(shiftBy<0){
        for(var n=-shiftBy;n>0;n--){
            temp = arr[0];
            for(var i=0;i<arr.length-1;i++){
                arr[i] = arr[i+1];
                // console.log('test',arr);
            }
            arr[arr.length-1] = temp;
            // console.log('test-outer loop',arr);
        }
    }
    return arr
}

//test
arr3 = [1,2,3,4,5,6]
console.log('#2:',rotateArr(arr3,3));
console.log('#2b:',rotateArr(arr3,-3));

// 3. Alan is good at breaking secret codes. One method is to eliminate values 
// that lie within a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: return the 
// array you are given, with values in original order. 
// No built-in array functions.

function secret(arr, min, max){
    var ct=0;
    for(var i = 0; i<arr.length; i++){
        // console.log('i=',i);
        // console.log(arr[i]);
        if((arr[i]<min)||(arr[i]>max)){
            // console.log('j end point:',arr.length-1);
            for(var j=i; j<arr.length-1; j++){
                arr[j]=arr[j+1];
            }
            // console.log('inner',arr);
            arr.pop();
            // console.log('outer',arr);
            i--;
        }
    }
    return arr;
}

//test
arr4=[8,4,7,2,18,56];
console.log('#3:',secret(arr4,5,20));

// 4. Replicate JavaScript’s concat(). Create a standalone function that accepts 
// two arrays. Return a new array containing the first array’s elements, 
// followed by the second array’s elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function new_concat(arr1,arr2){
    var add_x = arr2.length + arr1.length;
    var arr = [];
    // console.log(add_x);
    arr[add_x-1]=0;
    for(var i=0;i<arr1.length;i++){
        arr[i]=arr1[i];
    }
    i=0;
    for(var j=arr1.length;j<arr.length;j++){
        arr[j]=arr2[i];
        i++;
    }
    return arr;
}

//test
arr_a = [1,2,3,4];
arr_b = ['a','b'];
console.log('#4:',new_concat(arr_a,arr_b));