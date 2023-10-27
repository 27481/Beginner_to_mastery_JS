// parameter destructuring

// used with object in react 

const person={
    firstName:"utkarsh",
    gender:"male", 
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails(firstName, gender){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);