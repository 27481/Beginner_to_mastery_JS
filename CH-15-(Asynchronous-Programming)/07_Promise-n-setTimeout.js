// Promise && setTimeout 

// I want to resolve / reject promise after 

function myPromise(){
    return new Promise((resolve,reject)=>{
        const val=true;

        setTimeout(()=>{
            if(val)
                resolve();
            else 
                reject();
        },100000)
    })
}

myPromise().
then(()=>{console.log("resolved")})  // then block will run if promise is resolved 
.catch(()=>{console.log("resolved")}) // catch block will run if promise is rejected
