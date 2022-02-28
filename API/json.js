const friend = {
    id:11,
    name: 'Akash Mahamud',
    job: 'Developer',
    love:false
};
// object to strigify = JSON.stringify()
// strigify to Object = JSON.parse()

// stringify effect only for stiong or text but Boolean or Number not effectd
const strigify = JSON.stringify(friend);
console.log(strigify.id);
console.log(friend);