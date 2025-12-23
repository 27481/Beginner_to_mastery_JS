// Static methods and Properties ==>They can be called directly from the class name without creating a class object and then calling that method on that class-object

class Person{
    constructor(firstName, LastName, age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=this.age;
    }
    static classInfo(){                       // static method 
        return `this is person class`;
    }
    static desc="this is static property";      // static property
    
    set fullName(fullName){
        // this.firstName=firstName;
        // this.lastName=lastName;
        
        const[firstName, lastName]=fullName.split(" ");  // spliting the string using whitespace as a seperator 
        this.firstName=firstName;
        this.lastName=lastName;
    }
    eat(){
        return `${this.firstNamename} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

const person1=new Person("harshit", "sharma", 8);

console.log(person1.eat());

console.log(Person.classInfo());// directly calling that static method on the class , no need to create a class object and then call this static method on that class