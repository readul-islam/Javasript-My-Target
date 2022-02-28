// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();
class Person {
    name;
    work = 'web devolopment'
    company;
    city;
    position;
   constructor( position, city , company){
    
    this.company = company;
    this.position = position;
    this.city = city;       
}
    
        
    }

class student extends Person {
    eclass;
    constructor(position, city , company, eclass){
        super( eclass)
        this.eclass = eclass;
    }
}

const identity = new student('top', 'google','newwork')
 console.log(identity);