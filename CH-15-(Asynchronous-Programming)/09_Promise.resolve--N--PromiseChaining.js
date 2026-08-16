// Promise.resolve 
// Promise.chaining 

// const myPromise = Promise.resolve(5);

// myPromise.then(value=>console.log(value));

// then method hamesha promise return karta hai
function myPromise(){
 return new Promise((resolve,reject)=>{
    resolve("foo");
 })
}

myPromise()
.then((value)=>{
    console.log(value);
    value += "bar";
    return value;
    // return Promise.resolve(value); --> internally Js is returing this
})
.then((value)=>{
    console.log(value);
    value+="baaz";
    return value;
})
.then((value)=>{
    console.log(value);
})

// this snippet is demonstrating Promise chaining and, more specifically, the fact that .then() always returns a new Promise.

