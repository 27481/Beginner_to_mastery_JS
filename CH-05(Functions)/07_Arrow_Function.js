
// Arrow Function javaScript
// order -> 



//Function declaration using function expressing 
const singHappyBirthday=function(){
    console.log("happy birthday to you >.......");
}

// Function declaration using Fat arrow(=>)function
const singHappyBirthdays=()=>{
   console.log("happy birthday to you .........");   
}

singHappyBirthday();
singHappyBirthdays();


//function declaration using Fat arrow function 
const sumThreeNumbers=(number1,number2,number3)=>{
    return number1+number2+number3;
}

const ans=sumThreeNumbers(2,3,4);
console.log(ans);


const isEven=(number)=>{
    return number%2==0;
    return false;
}

console.log(isEven(5));

