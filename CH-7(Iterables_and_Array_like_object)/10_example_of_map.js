// Real life example of map

const person = new Map([['firstName','utkarsh'],['age',7]]);
console.log(person);

const person1={
    id: 1,
    firstName: 'utkarsh',   
}

const userInfo = new Map();
userInfo.set(person1,{age: 8, gender: "male"});


// console.log("\n",userInfo);
console.log(person1.id);
console.log(userInfo.get(person1));
