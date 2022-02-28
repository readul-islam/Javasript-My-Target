const processOrder = (customer) =>{
    console.log(`processing order for customer 1`);
    setTimeout( () => {console.log(`wait 3 seceons`)}, 3000);
    console.log(`order processed for customer 2`)
};
console.log(`order processed for customer 3`);
processOrder();
console.log(`comepleted order for customer4`)