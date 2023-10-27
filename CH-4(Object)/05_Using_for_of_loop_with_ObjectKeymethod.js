// Using for of loop with an object 

const person={
    name:"utkarsh",
    age:22,
    "person hobbies":["guitar","sleeping","listening music"],
}

const keyArray=Object.keys(person);
console.log(keyArray);
console.log("\n\n");

//! method to check if the variable is array or not 
console.log(Array.isArray(keyArray));


// Using for-of loop 
for(let key of keyArray){
    console.log(key,":",person[key]);
}