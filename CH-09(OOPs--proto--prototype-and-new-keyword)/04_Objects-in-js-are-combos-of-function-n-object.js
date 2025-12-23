function hello() {
    console.log("hello world");
}

// In JS function ==> Function + Object   {kind of } 

// Console.log(hello.anme);

// You can add your own properties 
hello.myownProperty = "very unique value"; 
console.log(hello.myownProperty); 


// name property --> tells function name 

// function provides more usefull properties
// Only function provides prototype property 



if(hello.prototype)    // Checking if the prototype property holds true in a hello function or not 
    console.log("prototype is present");
else
    console.log("prototype is not present");



