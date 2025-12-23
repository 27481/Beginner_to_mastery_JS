// setter  -> declared by using 'set' keyword before a method inside a class 

/*

Any method declared with the set keyword is a JavaScript setter, and a setter is required by the language spec to accept exactly ONE parameter.

set foo(x) → ✅ valid

set foo(x, y) → ❌ syntax error

set foo() → ❌ syntax error

*/

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){  // it means this function callable without using calling brackets () => means used these methods as a property 
        return `${this.firstName} and ${this.lastName}`
    }
    set setName(fullName){
        const [firstName , lastName]=fullName.split(" ");

        this.firstName=firstName;
        this.lastName=lastName;

        return `${this.firstName} - ${this.lastName}`
    }
}

const person1= new Person("harshit", "sharma", 5);
console.log(person1.firstName);                      // using getter concept 


// person1.setName("utkarsh pandey");              
person1.setName="utkarsh pandey";      // Using setter concept 
console.log(person1);   



person1.firstName="ritesh";  // otherwise do it using dot . operator to access and change the attribute
person1.lastName="soni";
console.log(person1);





