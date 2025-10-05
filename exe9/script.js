const form = document.querySelector('#signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const oldError = form.querySelector('.error-message');
    if (oldError) oldError.remove();

    if(username === '' || email === ''){
        const error = document.createElement('p');
        error.textContent = 'Please fill all fields';
        error.style.color='red';
        error.classList.add('error-message');
        form.append(error);
    };
})


// FORM PASSWORD
const form2 = document.querySelector('#signup2')

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirmPassword').value.trim();

    const oldError2 = document.querySelector('.form-message');
    if (oldError2) oldError2.remove();

    const message = document.createElement('p')
    message.classList.add('form-message');

    if (password === '' || confirmPassword === '') {
        message.textContent = 'Please insert password';
        message.style.color = 'red';
    } else if (password !== confirmPassword) {
        message.textContent = 'Password do not match';
        message.style.color = 'red';
    } else {
        message.textContent = 'Sign up sucess';
        message.style.color = 'green'
        form2.reset();
    }

    form2.append(message);
})