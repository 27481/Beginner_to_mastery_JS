// Promises [Represents a future value] 

// It represents a value which is unknown currently but would be known in future

// It has 2-Phases ==> Pending, Success-or-Reject

const bucket=['coffee', 'vegetables', 'salt', 'rice'];


// Creating a promise 
const foodKaPromise =new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt"))
        resolve({value : "fried Rice"});
    else 
        reject("Couldn't do it");
}, )


// Consume 
// How to consume a promise 
foodKaPromise.then((myFood)=>{
    //When promise is resolved 
   console.log("lets eat", foodKaPromise);
},
// When Promise is rejected
(error)=>{console.log(error)
}
);

// Another way to consume Promise---> using .then().catch()
foodKaPromise.then(
    // When promise is resolved 
    (P)=>{
        if((bucket.includes("vegetables") && bucket.includes("salt")))
        console.log("lets eat", P);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)


