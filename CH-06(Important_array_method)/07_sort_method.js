// sort method -> In JavaScript, you can sort arrays using the sort() method, which is available on array objects. The sort() method arranges the elements of an array in ascending order by default, but you can also customize the sorting order by providing a compare function as an argument.



// SYNTAX====> array.sort([customComparatorFunction])

// NOTE: -> sort() method (mutate) our original array itself, unlikely forEach loop
// NOTE: -> JavaScript sort the data based on (string) not number (via ascii code) 

const utkarsh=[5,9,1200,400,3000];
const utkarsh2=["5","9","1200","400","3000"];
utkarsh.sort();
utkarsh2.sort();


console.log(utkarsh);
console.log(utkarsh2);