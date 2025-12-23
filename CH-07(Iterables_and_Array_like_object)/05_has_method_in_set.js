// has() method in sets

// The .has() method is useful when you need to quickly determine if a specific value is present in a set, especially when working with collections of unique elements.

// The .has() method is specific to the Set data structure in JavaScript and is not applicable to other container classes like arrays, strings, or objects. It is designed to work with Set instances to check for the presence of values within a set.




const containerClass=['utkarsh1','utkarsh2','utkarsh3','utkarsh4','utkarsh5'];

const n=new Set(containerClass);
n.add('1');
n.add('2');


// console.log(n);
// Checking the presence of our desired element in the set or not
if(n.has(1))
   console.log("1 is present");
else
  console.log("1 is not present");