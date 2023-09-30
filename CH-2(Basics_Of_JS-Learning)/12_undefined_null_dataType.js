//! undefined 
//! null


//! undefined --> n JavaScript, an undefined variable is a variable that has been declared but has not been assigned a value. When you declare a variable without initializing it, it automatically gets the special value undefined.

// we can do this to var , let they will undefined dataType but not with const 


let firstName;
console.log(typeof(firstName));
firstName="utkarsh";
console.log(typeof(firstName),firstName);





//! null -> dataType of null storing variable is (object) which is a bug

let myVariable=null;
console.log(typeof(myVariable),myVariable);


//TODO: BigInt
let myNumber= BigInt(1238230047238423478032473204732409327432040324329043);
let sameMyNumber = 123n;
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber);
console.log(`The sum is`,myNumber+sameMyNumber);
