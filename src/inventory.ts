import Product from './products';

interface InventoryItem {
    product:Product;
    quantity:number;
}

const inventory:InventoryItem[] = [
    {    
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {    
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },
    {    
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }         
];

function calcInventoryValue (inventory:InventoryItem[]) {
    let result:number = 0;

    inventory.forEach(item => {
        result = result + (item.product.price * item.quantity);
    });
    return result;
}

console.log(calcInventoryValue(inventory));