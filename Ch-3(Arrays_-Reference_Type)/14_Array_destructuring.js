// Array destructuring

const myArrr=["value1","value2", "value3","value4"];
// let myvar1=myArrr[0];
// let myvar2=myArrr[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar1", myvar1);

let [myvar1, , myvar2, ...myNewArray]=myArrr;
// myvar1="value changed";
// let myNewArray = myArrr.slice(2);
console.log("value of myvar1", myvar1);
console.log("value of myvar1", myvar2);

console.log(myNewArray);