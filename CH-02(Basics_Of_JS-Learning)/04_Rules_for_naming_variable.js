//! Rules for naming variables 

// you can not start naming a variable  with number 
// example :-
//* 1value (invalid)
//* value1 (valid)

var value=2;
console.log(value**0.5);
var value1=10;
console.log(value1+10);

//! you can use only underscore _ or dollar symbol at the beggning 
// first_name(Valid)
// _underscore(valid)

// first$name (valid)
// $firstname (Valid)

console.log(first$name); 
var first$name="mohit";
console.log(first$name);


//! You can not use spaces between variables 
// var first name="bbdnitm" (invalid);

//! Using (snake_case vs camelCase writing convention)
var camelCase="this string is assigned to a varible which is declared by using camelCase";
var snake_case="this string is assinged to a varible which is declared by using snale_case"
console.log(camelCase,snake_case);



//* js coders mostly use camelCase 
