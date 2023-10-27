// Using map function with fat arrow function

const numbers=[1,2,3,4,5,6];

const squareNumber=numbers.map((number, idx)=>{
    return `index: ${idx},${number*number}`;
});


// console.log(squareNumber);

const users=[
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "utkarsh", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);