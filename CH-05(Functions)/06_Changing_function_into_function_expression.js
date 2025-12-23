// changing function into function expression 
const fun=function(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target)
         return i;
    }
    return -1;
}

let v=[1,2,3,4,5,6,7];
console.log(fun(v,1));