//! Some important methods for string 

// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName ="utkarsh";

//! stringVariable.length method -> helps to find the lenght of the string 
// console.log(firstName);
// console.log(firstName.length);

//! stringVariable.trim() method -> helps to remove the blanks spaces from the string  
// let newString=firstName.trim();   // "utkarsh"
// firstName.trim();
// console.log(firstName);
// console.log(newString);
// console.log(firstName.length);

//! stringVariable.toUpperCase()
// firstName=firstName.toUpperCase();
firstName=firstName.toLocaleLowerCase();
console.log(firstName);



//! stringVariable.slice method -> helps to remove print some substring of real string 
// start index
// end index 

let newString= firstName.slice(0,5);
console.log("The desired substring is : ",newString);