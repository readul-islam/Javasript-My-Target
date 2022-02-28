// const products = [
//     { name: 'laptop', price: 50000, quantity = 1 },
//     { name: 'shirt', price: 500, quantity = 5 },
//     { name: 'watch', price: 3680, quantity = 1 },
//     { name: 'phone', price: 5500, quantity = 2 }
// ];
// let totalPrice = 0;
// for (let product of products) {
//     totalPrice = product.price + totalPrice;
// }
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 50000,  quantity: 5},
    { name: 'shirt', price: 500,  quantity: 5},
    { name: 'watch', price: 3680,  quantity: 5},
    { name: 'phone', price: 5500, quantity: 5}
];
let cartTotal = 0;
for (let product of cart) {
    let productPrice = product.price * product.quantity;
    cartTotal = cartTotal + productPrice;

}
console.log(cartTotal);