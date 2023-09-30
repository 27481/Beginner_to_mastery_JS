//! and or operator

let firstName="utkarsh";
let age=16;

if(firstName[0]==="u"){
    console.log("you name starts with U");
}

if(age>18){
    console.log("you are above 18");
}


//! Checking both condition togather 
if(firstName[0]=="u" && age>18){
    console.log("your name starts with U and you are above 18");
}
else{
    console.log("inside else");
}





//! checking condition with OR operator 
if(firstName[0]=="U" || age>18){
    console.log("inside if")
}
else{
    console.log("inside else 2nd time");
}