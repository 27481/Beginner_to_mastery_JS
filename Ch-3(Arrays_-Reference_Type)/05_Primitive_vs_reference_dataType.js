// primitive vs reference dataTypes 



//! Primitive data_types
let num1=6;
let num2=num1;

console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log("After incrementing num1");
console.log("value of num1 is :",num1);
console.log("value of num2 is :",num2);



//! reference data_types ex-> array

let arr1=["item1","item2"];
let arr2=arr1;

console.log("array1 ",arr1);
console.log("array2 ",arr2);
arr1.push("item3")
console.log("after pushing element to array 1");
console.log("array1 ",arr1);
console.log("array2 ",arr2);



//! Primitive dataTypes are stored in stack memory
