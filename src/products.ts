interface Product {
    name:string;
    price:number;
}

const products:Product[] = [
    {
        name: 'peanut butter',
        price: 2.99
    },
    {
        name: 'cucumber',
        price: 0.59
    },
    {
        name: 'gum',
        price: 1.99
    },
    {
        name: 'frozen pizza',
        price: 6.99
    },
    {
        name: 'apple juice',
        price: 3.99
    } 
];

export function calcAverageProductPrice(products:Product[]):number {
    let average:number = 0;

    products.forEach(product => {
      average = average + product.price;  
    });

    average = average / products.length;
    return average;
}

export default Product;

console.log(calcAverageProductPrice(products));