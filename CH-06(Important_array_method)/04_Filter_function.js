// Filter method -> is a method of array , and callback function of filter method should have bool return type 


// NOTE : callback function of filter method should have bool return type only

const isEven=function(number){
    return (number%2==0);
}


const numbers =[1,2,3,4,5,6,7,8,9,10];

const returnArr=numbers.filter(isEven);
console.log(returnArr);