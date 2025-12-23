// working of ForEach loop 


const users=[
    {FirstName : "rohit", age: 23},
    {FirstName: "rohan", age:  23},
    {FirstName: "utkarsh", age: 23},
]

users.forEach(function(user){
    console.log(user.FirstName);
});

console.log();
users.forEach((user)=>{
    console.log(user.FirstName);
})

console.log();
for(let user of users){
    console.log(user.FirstName);
};