sessionStorage.setItem('name', 'akash');
const isObject = {
    name:'Akash Mahamug',
    age : 18,
    
    friends:{
        name:'Alim Mahamud',
        age:20
    }
};
const stringfu = sessionStorage.setItem('isobject' ,JSON.stringify(isObject))
const removeItem = sessionStorage.removeItem('name');
const getItem = sessionStorage.getItem('isobject');
const converted = JSON.parse(getItem);
console.log(converted);