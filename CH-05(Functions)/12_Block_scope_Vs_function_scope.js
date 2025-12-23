// block scope vs function scope 


// let and const are block scope 
// var is functional scope


// {
//    let firstName="utkarsh";
// }
// // console.log(firstName);

// {
//   const firstName="pandey";
// }
// // console.log(secondName);

// {
//    var thirdName="college";
// }
// const firstName="test";
// console.log(firstName);



function myApp(){
    if(true){
        let firstName ="utkarsh";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();