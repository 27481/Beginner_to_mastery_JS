// Constructor function 
function createUser(firstName, age){
    this.firstName=firstName;
    this.age=age;
}

usr1=new createUser("utkarsh", 1);
usr2=new createUser("pandey", 2);
usr3=new createUser("Lucknow", 3);

/*
Working of new keyword 

1> Empty object this = {}
2> return this 
3> return this 



const obj = {};                          // 1. create empty object
obj.__proto__ = User.prototype;          // 2. link prototype
User.call(obj, "A");                     // 3. bind this to obj
return obj;                              // 4. return object

*/

console.log(usr1);