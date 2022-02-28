function costForWood(tableQuantity, bedQuantity, chairQuantity) {
    const tableWood = 10;
    const bedWood = 55;
    const chairWood = 5;
    let totaltableWood = tableQuantity * tableWood;
    let totalBedWood = bedQuantity * bedWood;
    let totalChairWood = chairQuantity * chairWood;
    let totalCostWood = totaltableWood + totalBedWood + totalChairWood;
    return totalCostWood;
}
let total = costForWood(5, 7 , 10);
console.log(total);