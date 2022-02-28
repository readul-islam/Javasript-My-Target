const phones = [
    {
        name: 'sumsung F22', price: 1900, strogr: 16, camera: 16
    },
    {
        name: 'oppo f19', price: 19900, strogr: 128, camera: 48
    },
    {
        name: 'sumsung ultra', price: 30000, strogr: 128, camera: 108
    },
    {
        name: 'sumsung F20', price: 19300, strogr: 16, camera: 16
    },
    {
        name: 'sumsung F21', price: 19200, strogr: 16, camera: 16
    }
]
var cheapset = phones[0];
for (let phone of phones){
    if (phone.price < cheapset.price){
        cheapset = phone;
    }
}
console.log(cheapset);