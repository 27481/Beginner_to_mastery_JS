//  Sets (it is iterable)
// store data
// sets also have its own methods 
// No index-based access 
// Order is not guaranteed 
// unique items only (no duplicates allowed)


// In both cases, the new keyword is used to create an instance of a class or constructor function and assign it to a variable. However, keep in mind that JavaScript and Java are different programming languages with different syntax and behavior, so there are differences in how they handle objects and classes.

const n=[1,2,3];
const numbers=new Set(n);

console.log(numbers);
console.log(numbers[2]);



const s2=['u','t','k','a','r','s','h'];
const num2=new Set(s2);

num2.add('utkarsh');
num2.add('utkarshPandey');
num2.add('BbdNitm');
num2.add('item1','item2');
num2.add('item1','item2');

console.log(num2);