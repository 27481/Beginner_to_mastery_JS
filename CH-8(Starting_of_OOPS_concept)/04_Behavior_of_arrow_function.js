// arrow functions --> Arrow function does not have thisReference of its own, it takes thisReference from its surrounding  

const user1={
    firstName : "utkarsh",
    age : 8,
    about : ()=>{
        console.log(this.firstName, this.age);
    }
}


user1.about.call(user1);