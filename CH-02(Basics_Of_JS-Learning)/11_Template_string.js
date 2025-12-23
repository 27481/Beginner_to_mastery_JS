//! template string -> It allows us to do string formatting 

let age=22;
let firstName ="utkarsh";

// "my name utkarsh and my age is 21"
let aboutMe = "my name is "+ firstName + " and my age is " + age;
console.log(aboutMe);


// String formatting by using template string and backtick ` `
let AboutMe=`my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);

