// map method -> works similiar to forEach().It takes callback() function as input and makes a new array and we have to store it in new array 

// the value which is getting returned from callback() function will stored in new array otherwise if we use console.log() instead of return then by default undefined will be returned 


// It is crusial to use return something form call function to use map() function
const uarr=[3,4,5,6,7];

const square=function(uarr){
    return uarr*uarr;
    // console.log(uarr*uarr);
}

const squareNumber=uarr.map(square);
console.log(squareNumber);



