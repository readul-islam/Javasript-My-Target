function countAnimal(miles){
    const tenMileAnimalDensity = 10;
    const secondTenMileAnimalDensity = 50;
    const thridTenMileAnimalDensity = 100;
    if (miles <= 10){
        const tenMileAnimal = miles * tenMileAnimalDensity;
        return tenMileAnimal;
    }
     else if ( miles <= 20){
        const tenMileAnimal = 10 * tenMileAnimalDensity;
        const presentMiles = miles - 10;
        const secondTenMileAnimal = (presentMiles * secondTenMileAnimalDensity) + tenMileAnimal;
        return secondTenMileAnimal;
        
    }
    else{
        const tenMileAnimal = 10 * tenMileAnimalDensity;
        const secondTenMileAnimal = 10 * secondTenMileAnimalDensity;
        presentMiles = miles - 20;
        const afterMilesAnima = (presentMiles * thridTenMileAnimalDensity) + tenMileAnimal + secondTenMileAnimal;
        return afterMilesAnima;

    }
}
var totalAnimal = countAnimal(21);
console.log(totalAnimal);