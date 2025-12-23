// important array methods 

const numbers =[4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}: `,index);
    // console.log(`${number}*2=${number*2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// for(let i=0; i<numbers.length; i++){
    // console.log(i);
    // multiplyBy2(numbers[i], i);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// });

numbers.forEach(function(number, index){
    console.log(number*2,index);
});