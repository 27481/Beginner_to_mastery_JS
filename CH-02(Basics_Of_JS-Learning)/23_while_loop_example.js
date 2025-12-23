// While loop example 
let num=10;

//! First approach 
let total=0;
let i=0;
while(i<=10){
    total+=i;
    i++;
}
console.log(`The number upto ${num} is : `,total);


//! Optimized way => 
console.log(`The number upto ${num} is : `,(num*(num+1)/2)); 


//* Here Optimized way istaking constant time while First approach is taking linear time

