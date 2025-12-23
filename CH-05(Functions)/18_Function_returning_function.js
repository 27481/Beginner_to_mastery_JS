//   Function returning function

function myFunc(){
    // return "a";
    // return [1,2,3];
    // return{name : "utkarsh", age: 22};
    function hello(){
        return "Hello world";
    }
    return hello;
}

const ans=myFunc();
console.log(ans);


// When a function takes another function as input and returns function its called higher order function

