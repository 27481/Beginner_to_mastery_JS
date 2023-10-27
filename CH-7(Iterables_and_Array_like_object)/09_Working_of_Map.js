// stores value pair 


// Difference between Object and map i.e key can be of any type in map , while in object key is always of string type
// Objects are not iterable but map are i.e we can use forof loop on map
// On objects we can use forof loop but not forIn loop but not forOf loop 


const person = new Map();
person.set('firstName','utkarsh');
person.set('age','7');
person.set([1,2,3],'onetwothree')
console.log(person);

person.set(1,'one');
console.log(person);
// console.log(person.firstName); -> not applicable in map


// Accessing key-value pair from map
console.log(person.get(1));


for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let [key,value] of person){
    // console.log(Array.isArray(key));
    console.log(key,value);
}