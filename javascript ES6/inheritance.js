class TeamMember{
    name;
    designation = 'Support web development';
    address = 'bd'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember  {
   
    passion;
    constructor(name, address,passion){
        super(name ,address)
        this.passion = passion;
    }
    
    startSessuion(){
        console.log(`${this.name} start a support session`)
    }

}
class studentCare extends TeamMember{
   
     buildARoutine(student){
         console.log(`${this.name} build a routine for `,student)
     }
}
class NeptuneTeam extends TeamMember{
   
     NeptuneApp(varsion){
         console.log(`${this.name} build a   ${varsion} for neptune app`)
     }
}



const students = 'katrina';
const alia = new studentCare('Alia Batt', 'Mumbaii')
const amir = new Support('akash', 'dhaka','techer');
console.log(alia);
alia.buildARoutine('katrina');