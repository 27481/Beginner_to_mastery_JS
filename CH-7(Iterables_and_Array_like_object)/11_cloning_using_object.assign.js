// Cloning using Object.assign


const obj={
    key1: "value1",
    key2: "value2",
}


let obj2 = obj;

obj.key3="value3";
// memory has only one object and that one object is pointed by obj1 and obj2 
// So any change made in any of them will be reflecte in both

console.log(obj);
console.log(obj2);


// to avoid this we use spread operator to make deep copy 
obj2={...obj};
obj2={
    college: "BBD-NITM",
}

console.log('\n');
console.log(obj);
console.log(obj2);

// Cloning by using Obj.assign 
 obj2 = Object.assign({}, obj);
 obj.key3="value5";

 console.log("obj one is ",obj);
 console.log("obj two is ",obj2);
