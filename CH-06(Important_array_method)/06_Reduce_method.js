// reduce method -> this method takes callBack function as input 

const arr=[1,2,3,4,5];

const res=arr.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue;
});

console.log(res);

// Tracking 
// accumulator , currentValue  ,  return=accumulator+currentValue 
//  1                2                 1+2=3
//  3                3                 3+3=6
//  6                4                 6+4=10
//  10               5                 15


const userCart=[
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "laptop", price: 30000},
    {productId: 3, productName: "tv", price: 15000},
]

const sum=userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice+currentProduct;
},0);


console.log(sum);


// tracing the value 

// total price   currentValue     return 
//  0               {}             12000
//  12000           22000          34000
// 34000            15000          49000


