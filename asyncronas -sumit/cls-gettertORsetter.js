// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }

// let person1 = new Person('Jack');
// console.log(person1.name); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah



class Person{
    id;
    name;
    age;
    set personName (id){
        this.id =  id
    }
}
const result = new Person();
Person.personName = 118;
console.log(Person.personName);