// function 
// input : array , target(number)
// output : index of target if target is present in the array 

function arrTarget(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target)
          return i;
    }
    return -1;
}

let arr=[1,2,3,4,5];

console.log(arrTarget(arr,5));
