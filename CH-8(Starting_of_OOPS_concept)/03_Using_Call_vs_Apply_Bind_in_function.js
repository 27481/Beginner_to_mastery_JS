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
  //about : function(hobby, favMusician){
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
}
const user2={
    firstName : "pandey",
    age : 9, 
}

// apply => it also uses call internally but takes input as a list array form [a,b,c,d] 
user1.about.call(user2,"guitar","moazrt");


// bind => It returns a function , so in future if we need to call function we can do it 
const func = about.bind(user1,"guitar","bach");
func();