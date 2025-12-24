// Function can reutrn functions 

function outerFunction(){
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction
}

const ans=outerFunction();

console.log(ans);
ans();