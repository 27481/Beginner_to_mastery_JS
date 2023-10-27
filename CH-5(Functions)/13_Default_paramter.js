// default parameters 

function addTwo(a,b=0){
    // if(typeof(b)==="undefined")
    //      b=1;
    return a+b;
}

const ans=addTwo(4);
console.log(ans);