//! for loop in array

let utkarsh=["hello","world","this","is","beginning"];

// for(let i=0; i<=9; i++){
//     console.log(i);
// }

// console.log(utkarsh.length);
// console.log(utkarsh.length-1);


for(let i=0; i<=utkarsh.length-1; i++){
    console.log(utkarsh[i].toUpperCase());
}


//* Pushing element of one array into another one by one 
let utkarsh2=[];

for(let i=0; i<utkarsh.length; i++){
    utkarsh2.push(utkarsh[i].toUpperCase())
}

console.log("Value of pushed array is ",utkarsh2);