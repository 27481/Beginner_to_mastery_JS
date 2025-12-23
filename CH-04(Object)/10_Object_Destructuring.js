// Object destructuring 
const band={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year:1968,
    anotherFamousSong : "kashmir",
};


// Doing destructuring mannually 
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);


// With trick 
const {bandName :var1, famousSong:var2, ...restProps}=band;
console.log(var2, "\n",restProps);