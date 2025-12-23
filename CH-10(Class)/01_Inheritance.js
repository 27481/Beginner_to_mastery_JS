class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }   
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

class dog extends Animal{
     // animal class's (i.e base-class) constructor will be triggered by js 
     constructor(name, age, speed){
        super(name, age);
        this.speed=speed;
     }
     run(){
        return `${this.name} is running at ${this.speed} km/ph`;
     }
}

// const tommy=new dog("tommy", 3);
const tommy=new dog("tommy", 3, 45);

console.log(tommy.run());
console.log(tommy.eat());


