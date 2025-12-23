// getter-n-setter 

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){  // it means this function callable without using calling brackets () => means used these methods as a property 
        return `${this.firstName} and ${this.lastName}`
    }
    setName(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1= new Person("harshit", "sharma", 5);
console.log(person1.firstName);                      // using getter concept 

// console.log(person1.firstName());               Without using getter concept just () 
// console.log(person1.firstName());
// console.log(person1.firstName());

person1.setName("utkarsh", "pandey");               // Using setter concept 
console.log(person1);   

person1.firstName="ritesh";  // otherwise do it using dot . operator to access and change the attribute
person1.lastName="soni";
console.log(person1);


// person1.setName("mohit", "vashistha");

// console.log(person1.firstName);
// console.log(person1.lastName);



