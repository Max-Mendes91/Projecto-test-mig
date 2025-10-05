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
