/* 

setTimeout() ==> takes 2 input 1st-> function , 2nd-->waiting time

This function is provided by the [Web Apis Provided by Browser]
*/

console.log("Script start\n");

function hello(){
    console.log("Inside setTimeout\n");
};


for(let i=1; i<100; i++){
    console.log(".....");
}
setTimeout(hello, 0); // Take 2 argument, 1st->Function ,2nd-->Waiting time


console.log("Script end\n");
