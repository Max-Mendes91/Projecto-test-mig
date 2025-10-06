const form = document.querySelector('#signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const oldError = form.querySelector('.error-message');
    if (oldError) oldError.remove();

    if (username === '' || email === '') {
        const error = document.createElement('p');
        error.textContent = 'Please fill all fields';
        error.style.color = 'red';
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

// AGE VERIFIER
const ageForm = document.querySelector('#ageForm');

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('click');

    const oldErrorMessage = ageForm.querySelector('.errorMessage')
    if (oldErrorMessage) oldErrorMessage.remove();


    const errorMessage = document.createElement('p');
    errorMessage.classList.add('errorMessage');


    const age = document.querySelector('#age').value.trim();
    if (age === '') {
        errorMessage.textContent = 'Please enter your age';
        errorMessage.style.color = 'red';
    } else if (age < 18) {
        errorMessage.textContent = 'You must be 18 or older';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = 'Access granted';
        errorMessage.style.color = 'green'
    }
    ageForm.appendChild(errorMessage)
});


//TEXT AREA 
const message = document.querySelector('#message')
const counter = document.querySelector('#counter')

message.addEventListener('input', () => {
    
    const remaining = 100 - message.value.length;
    counter.textContent = remaining;
    
    if (remaining > 0) {
        counter.textContent = `${remaining} chars remaining`;
        counter.style.color = 'black';
    }else if(remaining <= 0){
        counter.textContent = `${remaining} chars remaining`;
        counter.style.color = 'red';
    }
})

const score = 70;

if (score > 40) {
    console.log('Average');
} else if (score > 60) {
    console.log('Good');
} else if (score > 80) {
    console.log('Excellent');
} else {
    console.log('Fail');
}