import Products from "./products.tsx";

const productName: string = "Beanie";
const shippingAddress: string = '123 Main St, New York, USA';

let shipping: number;
let taxPercent: number;

// // filter() returns an array of elements that satisfy the condition
// const product = Products.filter(product => product.name === productName)[0];

// find() returns the first element that satisfies the condition
const product = Products.find(product => product.name === productName);

if (product) {
    console.log(product);
} else {
    console.log(`No product found with the name ${productName}`);
}

if (product === undefined) {
    console.log(`No product found with the name ${productName}`);
    process.exit();
}

if (product.preOrder === 'true') {
    console.log(`Thanks for your order. We will send you a message when your product, ${product.name}, is on the way.`);
} else {
    console.log(`Thanks for your order. Your product, ${product.name}, will be shipped soon.`);
}

if (product.price >= 25) {
    shipping = 0;
    console.log('We offer free shipping for this product.');
} else {
    shipping = 5;
    console.log(`There is a ${shipping} shipping fee for this product.`);
}

if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
    console.log(`Your tax rate is ${taxPercent * 100}%.`);
} else {
    taxPercent = 0.05;
    console.log(`Your tax rate is ${taxPercent * 100}%.`);
}

const taxTotal = product.price * taxPercent;
const total = product.price + taxTotal + shipping;

console.log(`Product Name: ${product.name}`);
console.log(`Shipping Address: ${shippingAddress}`);
console.log(`Price of the Product: $${product.price}`);
console.log(`Tax Total: ${taxTotal}`);
console.log(`Shipping: ${shipping}`);
console.log(`Total Amount: $${total}`);

const App = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {Products.map((product, index) => (
                    <li key={index}>
                        <h2>{product.name}</h2>
                        <p>Shipping Address: ${shippingAddress}</p>
                        <p>Price: ${product.price}</p>
                        <p>{product.preOrder === 'true' ? 'Available for preorder' : 'Not available for preorder'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;