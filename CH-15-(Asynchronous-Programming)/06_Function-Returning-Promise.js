// Function returning a promise 

function ricePromise(){

 const bucket=['coffee', 'vegetables', 'salt', 'rice'];

 return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt"))
        resolve({value : "fried Rice"});
    else 
        reject("Couldn't do it");
},)
}


ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
        console.log("lets eat", myfriedRice);
    }
).catch((error)=>{
    console.log(error);
})


