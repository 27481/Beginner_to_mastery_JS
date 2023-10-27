// Computed Properties 

/* 
In JavaScript, 
computed properties are a feature that allows you to create object property names dynamically, using expressions or variables, rather than specifying them as literal string values. 
This feature is available when defining object literals (also known as object initializers) and is denoted by square brackets [] around the property name.

Here's an example of computed properties in JavaScript object literals:
*/

const key1="objectkey1";
const key2="objkey2";

const value1="myvalue1";
const value2="myvalue1";

// const obj={
//     objkey1 : "myvalue1",
//     objkey1 : "myvalue2",

// }

// const obj ={
//     [key1] : value1,
//     [key2] : value2,
// }

// console.log(obj);

const obj ={};
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);