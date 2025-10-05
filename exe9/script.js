// const form = document.querySelector('#signup');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const username = document.querySelector('#username').value.trim();
//     const email = document.querySelector('#email').value.trim();
//     const oldError = form.querySelector('.error-message');
//     if (oldError) oldError.remove();

//     if(username === '' || email === ''){
//         const error = document.createElement('p');
//         error.textContent = 'Please fill all fields';
//         error.style.color='red';
//         error.classList.add('error-message');
//         form.append(error);
//     };
// })

const form = document.querySelector('#signup')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirmPassword').value.trim();

    const oldError = document.querySelector('.form-message');
    if (oldError) oldError.remove();

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
        form.reset();
    }

    form.append(message);
})