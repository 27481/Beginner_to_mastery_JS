//! if else condition

let age=17;

if(age>18){
    console.log("User can play ddlc:\n");
}
else{
    console.log("User can play mario :\n");
}

let num=14;
if(num%2===0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is not even`)
}

//! falsy values -> These 5 are falsy values i.e they evaluate to false  
// 1>false
// 2> "" 
// 3> null
// 4> undefined 
// 5> 0


//! truthy
// "ancd"
let firstName="utkarsh";

if(firstName){
    console.log(firstName);
}
else{
    console.log("first kinda empty");
}