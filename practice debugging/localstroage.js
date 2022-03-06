localStorage.setItem('name', 'akash');
const isObject = {
    name:'Akash Mahamug',
    age : 18,
    
    friends:{
        name:'Alim Mahamud',
        age:20
    }
};
const stringfu = localStorage.setItem('isobject' ,JSON.stringify(isObject))
const removeItem = localStorage.removeItem('name');
const getItem = localStorage.getItem('isobject');
const converted = JSON.parse(getItem);
console.log(converted);