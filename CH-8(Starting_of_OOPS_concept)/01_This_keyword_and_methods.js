// methods is => function inside object 

// const person ={
//     firstName : "utkarsh",
//     age: 8,
//     about: function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// } 

// Value of this is determined on runtime 
function personInfo(){
    // console.log(`person name is ${this.firstName}`)
    console.log(this)
    console.log(window)
}

const person1={
    firstName: "utkarsh",
    age: 8,
    about: personInfo,
}
const person2={
    firstName: "pandey",
    age: 17,
    about: personInfo
}
const person3={
    firstName: "bbd",
    age: 17,
    about: personInfo
}

personInfo();

// person1.about(); 
// person2.about();
// person3.about();
// console.log(person.about);