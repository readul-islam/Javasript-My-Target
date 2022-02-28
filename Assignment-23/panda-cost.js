function pandaCost(singaraQuan, samucaQuan, jilapiQuan){
    const perSingra = 7;
    const perSamuca = 10;
    const perJilapi = 15;
    let costTotalsingara = perSingra * singaraQuan;
    let costTotalSamuca = perSamuca * samucaQuan;
    let costTotalJilapi = perJilapi * jilapiQuan;
    let TotalCost = costTotalsingara + costTotalSamuca + costTotalJilapi;
    return TotalCost;
}

let totalMyCost = pandaCost(1, 1, 1);
console.log(totalMyCost);