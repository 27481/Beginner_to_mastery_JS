// function addAll(num1,num2,...num3){
//     return num1+num2+num3;
// }

// let c=addAll(1,2,4,5,6,3,2);
// console.log(c)

function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}

const ans=addAll(4,5,4,10,12); 
console.log(ans);