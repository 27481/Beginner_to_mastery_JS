// Optional chaining 

const user ={
    firstName: "utkarsh",
    address: {houseNumber: '1234'}
}

// let user;

console.log(user?.firstName);
// console.log(user.address.houseNumber);
console.log(user?.address?.firstName);