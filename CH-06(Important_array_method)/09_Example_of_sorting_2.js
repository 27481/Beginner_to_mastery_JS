const numbers =[5,9,1200.410,3000];
numbers.sort((a,b)=>{
    return b-a;  // sorting in desending order 
});


console.log(numbers);

// 1200, 410
// a-b -----> 790 
// a-b- ---> positive(greater than 0) -----> b,a
// 1200, 410



// for negative 
// a-b ---> negative ---> a,b 
// 5,9 ---> -4

