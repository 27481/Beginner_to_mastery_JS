// Spread operator in case of Object
const obj1={
    key1 : "value1",
    key2 : "value2",
    key1 : "59",
};
const obj2={
    key1 : "valueUnique",
    key3 : "value1",
    key4 : "value2",
}

// const newObject={...obj2,...obj1, key69:"value69"};
// const newObject ={..."abc"};
// const newObject={...["item1,","item2"]};
const newObject={..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObject); 