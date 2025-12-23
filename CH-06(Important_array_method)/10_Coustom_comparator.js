// Custom Comparator 

const product=[
    {productId :1, productName: "p1", price: 300},
    {productId :2, productName: "p2", price: 3000},
    {productId :3, productName: "p3", price: 800},
    {productId :4, productName: "p4", price: 8000},
    {productId :5, productName: "p5", price: 500},
]

// low to high 
const lowToHigh=product.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

console.log(lowToHigh);


// high to low 

const highToLow=product.slice(0).sort((a,b)=>{
    return a.price-b.price;
})

console.log(highToLow);