// getter-n-setter 

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){  // it means this function callable without using calling brackets () => means as a property 
        return `${this.firstName} and ${this.lastName}`
    }
    set fullName(fullName){
        // this.firstName=firstName;
        // this.lastName=lastName;
        
        const[firstName, lastName]=fullName.split(" ");  // spliting the string using whitespace as a seperator 
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
}

const person1= new Person("harshit", "sharma", 5);
console.log(person1.firstName);

person1.fullName="mohit vashistha";
console.log(person1);









