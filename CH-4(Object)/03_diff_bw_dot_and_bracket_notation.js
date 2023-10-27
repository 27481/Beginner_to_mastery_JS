// difference between dot and bracket notation 

const key="email";

const person={
    name:"utkarsh",
    age:22,
    "person hobbies":['guitar',"sleeping","listening music"]
}
// To access key which has space some space in its name i.e by using bracket notation
console.log(person["person hobbies"]);



// Adding key-value pair in object named ->(Person)
person[key]="utkarsh519@gmail.com";
console.log(person);
