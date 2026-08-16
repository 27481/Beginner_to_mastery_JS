// Function can reutrn functions 

// function outerFunction(){
//     let x=100;
//     function innerFunction(){
//         console.log(x,"Hello, I am inner function running");
//     }
//     return innerFunction;
// }

// const ans=outerFunction();

// console.log(ans);
// ans();

 
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans=printFullName("utkarsh", "pandey");
// console.log(ans);
ans();

