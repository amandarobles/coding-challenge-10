// task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock; //creating a class product with properties
    };
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; //returning a formatted string of product details
    };
    updateStock(quantity) {
        this.stock -= quantity; //modifies stock level when an order is placed
    };
}
//test data
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
//Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
prod1.updateStock(3);
console.log(prod1.getDetails());
//Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); //creating order class with properties
    };
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }; //returning order details
}
//test data
const order1 = new Order (501, prod1, 2);
console.log(order1.getOrderDetails());
//Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
//Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// task 3: Creating an Inventory Class
class Inventory {
    constructor() {
        this.products = []; //creating inventory class with property array
    };
    addProduct(product) {
        this.products.push(product); //adding new product to inventory
    };
    listProducts() {
        return this.products.forEach(product => console.log(product.getDetails())); //logging products' details
    };
}
//test data
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
//Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"