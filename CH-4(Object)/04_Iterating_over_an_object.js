// how to iterator object 

// --> we can iterate object by 2 ways 
// 1st way --> for in loop 
// 2st way --> object.key method


/*
In JavaScript, 
there is no Object.key() method. However, there is a method called Object.keys(), which is used to retrieve an array of the enumerable property names (keys) of an object. This method returns an array containing the keys of the object. 
*/

const utkarsh={
    name:"utkarsh",
    course:"btech",
    "person hobbies": ["coding","sleeping","working out"]
}

// BY using for in loop to iterate over an object's element 
for(let key in utkarsh){
    // console.log(`${key} : ${utkarsh[key]}`);
    console.log(key," : ",utkarsh[key]);
}
console.log("\n\n");


// By using object.key method
console.log((Object.keys(utkarsh)));
const val=Array.isArray((Object.keys(utkarsh)));
console.log(val);
