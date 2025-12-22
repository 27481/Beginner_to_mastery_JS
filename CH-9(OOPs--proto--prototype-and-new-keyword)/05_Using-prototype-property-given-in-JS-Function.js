// Using prototype property of a function  which is specially provided in JS 
createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years`
};
createUser.prototype.is18=function(){
        return this.age>=18;
};
createUser.prototype.sing = function(){
        return 'toon na na na na';
}


function createUser(firstName, lastName, email, age, address){
    // const user=Object.create(userMethods); // It is not only creating an object but giving a chain of proto to perform lookup 
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;
    return user;
}


user1=new createUser('utkarsh' , 'pandey', 'utkarshpandey519@gmail.com' ,23, 'Lucknow-chinhat');
user2=new createUser('utkarsh' , 'pandey', 'utkarshpandey519@gmail.com' ,23, 'Lucknow-chinhat');
user3=new createUser('utkarsh' , 'pandey', 'utkarshpandey519@gmail.com' ,23, 'Lucknow-chinhat');


console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.is18());
console.log(user1.sing());
console.log(user1.about());