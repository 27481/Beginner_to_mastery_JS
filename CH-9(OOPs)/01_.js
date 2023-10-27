const user ={
    firstName :"utkarsh",
    lastName : "pandey",
    email: "utkarshPandey519@gmail.com",
    age : 2,
    address : "House Number, Colony, pincode, state",
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >=18;
    }
}

// const aboutUser = user.about();
// console.log(aboutUser);


// making a function which takes input and creates objects and then add some key-value pair then return that newly created Object
 
function createUser(firstName, lastName, email, age, address){
    const user ={};
    user.firstName=firstName,
    user.lastName=lastName,
    user.email=email,
    user.age=age,
    user.address=address,
    user.about=function(){
        return `${this.firstName} is ${this.age} years `
    };
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}

const user1 =createUser('harshit','utkarsh',"utarshpandey519@gmail.com", 19, 'myaddress')
console.log(user1);