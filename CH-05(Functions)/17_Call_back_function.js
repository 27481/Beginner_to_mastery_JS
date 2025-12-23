// CallBack functions 

function myFunc2(name){
    console.log("inside my func2")
    console.log(`your name is ${name}`);
}


function myFunc(Callback){
    console.log("hello there I am a function and i can ....");
    Callback("utkarsh");
}


myFunc2(myFunc2);
