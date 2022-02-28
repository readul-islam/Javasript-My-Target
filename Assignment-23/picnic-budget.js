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