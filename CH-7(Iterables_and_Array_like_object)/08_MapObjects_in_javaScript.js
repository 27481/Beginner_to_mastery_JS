// Maps 
// map is an iterable 

// stores data in ordered fashion 
// store key value pair (like object)
// duplicate keys are not allowed like objects 

// different between maps and objects 

// objects can only have strings or symbol as key 

// in maps you can use anything as key 
// like array, number, string



// Object literal 
// key -> String dataType(99% of the time) 
// key -> Symbol 

const person={
    firstName : "utkarsh",
    age : 7
}

// console.log(person.firstName);
// console.log(person["firstName"]);
console.log(person['1']);


for(let jey in person){
    console.log(typeof key);
}
