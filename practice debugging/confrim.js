const showLocation = () => {
    const ask = confirm('are you want see your website location?');
    if (ask){
        console.log(location.href);
    }
    
}
showLocation();