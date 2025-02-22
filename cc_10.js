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