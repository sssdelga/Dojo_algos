// 1. Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

function new_index0(arr, newVal){
    arr[arr.length]=0;
    for(var i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=newVal;
    return arr;
}

// test
arr1= [2,5,8];
arr1_adjusted = new_index0(arr1,10);
console.log('#1:',arr1_adjusted);

// 2. Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().

function pop_index0(arr){
    var x=arr[0];
    for(var i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr.pop()
    console.log(arr);
    return x;
}

//test
arr2= [4,6,3];
arr2_ind_zero = pop_index0(arr2);
console.log('#2:',arr2_ind_zero);

// 3. Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) 
// as equivalent to insertAt(arr,0,val).

function insert_ind(arr, ind, repl){
    arr[arr.length]='empty'; 
    for(var i=(arr.length-1);i>ind;i--){
        arr[i]=arr[i-1];
    }
    arr[ind]=repl;
    return arr;
}  

//test
arr3= [2,4,8];
ind3= 2;
insert_val= 6;
console.log('#3:',insert_ind(arr3,ind3,insert_val));

// 4. Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). Think of popFront(arr) 
// as equivalent to removeAt(arr,0).

function pop_indexX(arr,ind){
    x = arr[ind];
    for(var i=ind;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return x;
}

//test
arr4 = [7,5,3,1];
ind4 = 2;
console.log('#4:',pop_indexX(arr4,ind4));

// 5. Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

function swaparoo(arr){
    if(arr.length%2===0){
        x=arr.length;
    }
    else{
        x=(arr.length)-1;
    }
    for(var i=0;i<(x-1);i+=2){
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    return arr;
}

//test
arr5o = [1,3,5];
arr5e = [2,4,3,7];
console.log('#5 odd:',swaparoo(arr5o));
console.log('#5 even:',swaparoo(arr5e));

// 6. Sara is looking to hire an awesome web developer and has received applications from 
// various sources. Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. Because array elements are already in order, 
// all duplicate values will be grouped together. As with all these array challenges, 
// do this without using any built-in array methods.
// Second: Solve this without using any nested loops.

function removeDups(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            for(j=i+1;j<arr.length-1;j++){
                arr[j]=arr[j+1];
            }
            console.log('before:',arr);
            arr.pop();
            console.log('after:',arr);
        }
    }
    return arr;
}

//test
arr6= ['John', 'John','Sue', 'Tom'];
console.log('#6:',removeDups(arr6));

//No nested loops

function removeDupsBetter(arr){
    noDupsArr = [arr[0]];
    for(var i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){
            noDupsArr.push(arr[i]);
        }
    }
    return noDupsArr;
}

console.log('#6 no nested loops:',removeDupsBetter(arr6));
arr6triple = ['Abe','Cam','Fred','Fred','Fred','Tom'];
console.log('#6 triple:',removeDupsBetter(arr6triple));