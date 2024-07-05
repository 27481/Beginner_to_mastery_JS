// // CallBack functions 
"use strict"
// function myFunc2(name){
//     console.log("inside my func2")
//     console.log(`your name is ${name}`);
// }


// function myFunc(Callback){
//     console.log("hello there I am a function and i can ....");
//     Callback("utkarsh");
// }


// myFunc2(myFunc2); 

// Regular function expression
function regularFunction() {
    console.log(this);  // 'this' refers to the context in which regularFunction is called
  }
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this);  // 'this' refers to the context in which arrowFunction is defined
  };
  
  // Example usage
  const obj = {
    regular: regularFunction,
    arrow: arrowFunction
  };
  
  obj.regular();  // 'this' will refer to 'obj' inside regularFunction
  obj.arrow();    // 'this' will refer to the enclosing scope (could be global object or undefined in strict mode)
  