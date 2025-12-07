// how to clone array (non-referencing array) i.e shallow copy 


// how to concatinate two arrays manually 
let  array1=["item1","item2"];
// let array2=["item1","item2"];

//! using slice() function
// let array2=array1.slice(0,array1.length);

//! Using Concat() function  
// let array2=[].concat(array1);
// array1.push("item3");


//! Using spread operator 
let array2 = [...array1];

array1.push("item3");

console.log(array1===array2);
console.log(array2);
console.log(array1);



//*  we can any of the 3 method concat() vs slice() vs spread operator 
//* By performance slice() operator is used but most people prefer spread operator