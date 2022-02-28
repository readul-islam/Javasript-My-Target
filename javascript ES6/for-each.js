// filter worked on condition if condition isnt true return an empty array 
const number = [34, 45, 33, 98];
const numbers = number.filter(num => (num < 45));
console.log(numbers);
// find method worked on condition but find return first element who fill  condition +
const findChack = number.find(num => (num < 45))
console.log(findChack);