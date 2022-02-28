var friend = {
    firstName: 'Abdul',
    lastName: 'Alim',
    age:20

};
// object access with -- objectName.propertyName
var she = friend.firstName;
console.log(she);
// object access with -- objectName['propertyName']
friend['lastName'] = 'rohoman';
console.log(friend);
// object access with third party 
var old = 'age'
var thirdParty =friend[old];
console.log(thirdParty);

