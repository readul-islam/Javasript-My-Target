document.getElementById('event-handler').addEventListener('click', function () {
    emailFlied = document.getElementById('user-email');
    userEmail = emailFlied.value;

    passwordFlied = document.getElementById('user-password');
    userPassword = passwordFlied.value;
    if(userEmail == 'am3153636@gmail.com' && userPassword == 'akashmahamud'){
        window.location.href = 'banking.html';
    }
    
})