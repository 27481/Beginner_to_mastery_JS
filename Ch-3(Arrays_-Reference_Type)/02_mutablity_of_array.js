// changing some elements of array 

let fruits=["apple","mango","grapes"];
fruits[1]="banana";  // manipulating the element of the array so array is mutable
console.log(fruits); 
console.log(fruits);

//! Array is a reference type and we call all the reference type an object in JS
//! so Array is an object in JS


obj={};
//! dataType of array is 
console.log(typeof(fruits)); 
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));