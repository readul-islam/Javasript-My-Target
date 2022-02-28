// class declared by class 
// class access function constructor this must be constructor name .daynamic changed class by constructor function  
class Friends{
    name;
    work = 'web development';
    constructor(name){
        this.name = name;
    }
    home = 'barisal';
    phone = 017588844;
    commonFunction(sum1, sum2){
        const division = sum1 / sum2;
        console.log(`this is division result ${division}`)
    }
}
const akash = new Friends('Akash Mahamud');
console.log(akash);
akash.commonFunction(10, 2);