document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    if (!email || !password || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    let message = `Email: ${email}\nPassword: ${password}\nPhone: ${phone}\nOTP Requested: ${otpChecked ? 'Yes' : 'No'}`;
    alert(message);
});
