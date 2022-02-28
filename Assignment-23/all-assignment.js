function anaToVori(ana) {
    const oneVoru = 16;
    let totalVori = ana / oneVoru;
    return totalVori;

}
let needVori = anaToVori();
console.log(needVori);



function pandaCost(singaraQuan, samucaQuan, jilapiQuan) {
    const perSingra = 7;
    const perSamuca = 10;
    const perJilapi = 15;
    let costTotalsingara = perSingra * singaraQuan;
    let costTotalSamuca = perSamuca * samucaQuan;
    let costTotalJilapi = perJilapi * jilapiQuan;
    let TotalCost = costTotalsingara + costTotalSamuca + costTotalJilapi;
    return TotalCost;
}

let totalMyCost = pandaCost();
console.log(totalMyCost);


function picnicBudget(attendanceNumber) {
    const firstHundredMoney = 5000;
    const secondHundredMoney = 4000;
    const thirdHundredMoney = 3000;

    if (attendanceNumber <= 100) {
        const inFirstHundredTotal = attendanceNumber * firstHundredMoney;
        return inFirstHundredTotal;
    }
    else if (attendanceNumber <= 200) {
        const inFirstHundredTotal = 100 * firstHundredMoney;
        const studentCounted = attendanceNumber - 100;
        const inSecondHundredTotal = (secondHundredMoney * studentCounted) + inFirstHundredTotal;
        return inSecondHundredTotal;

    }
    else {
        const inFirstHundredTotal = 100 * firstHundredMoney;
        const inSecondHundredTotal = secondHundredMoney * 100;
        const studentCounted = attendanceNumber - 200;
        const inthirdHundredTotal = (thirdHundredMoney * studentCounted) + inFirstHundredTotal + inSecondHundredTotal;
        return inthirdHundredTotal;



    }
}

const totalBudget = picnicBudget(200);
console.log(totalBudget);


function oddFriend(friends) {
    for (let friend of friends) {
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}

const findOddFriend = oddFriend();
console.log(findOddFriend);