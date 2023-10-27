// function hello(){
//     console.log("utkarsh");
// }

// hello.call();

// Call vs Apply vs bind



function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1={
    firstName : "utkarsh",
    age : 8,
    // about(hobby, favMusician){
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
}
const user2={
    firstName : "pandey",
    age : 9, 
}

// apply 
user1.about.call(user2,"guitar","moazrt");


// bind 
const func = about.bind(user1,"guitar","bach");
func();