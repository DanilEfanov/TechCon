function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;


    if (firstName === '' || lastName === '' || email === '') {
        alert('Please fill in all fields.');
    }
}

