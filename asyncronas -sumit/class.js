class friends{
    id = 201;
    name;
    age;
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
const a = new friends('akash', 18);
console.log(a.name, a.age, a.id);