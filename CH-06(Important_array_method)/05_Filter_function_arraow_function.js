// Using filter function with arrow function 

const utkarshArray=[2,1,0,0,5,4,1,5,3,0,0,5,1];


const evenNumbers = utkarshArray.filter((number)=>{
    return number%2===0;
});

console.log("Filter the even number from the array : ",evenNumbers);