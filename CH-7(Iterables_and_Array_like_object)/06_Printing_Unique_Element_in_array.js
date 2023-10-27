// Program to print unique element in the array 

const myArr=[2,1,0,0,5,4,1,5,3,0,0,5,1];

const uniqueElem= new Set(myArr);

console.log(uniqueElem);
length=0;

for(const i of uniqueElem) {
    console.log(i);
    length++;
}  

console.log("Number of unique elements in the array is ",length);