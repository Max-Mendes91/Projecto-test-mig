// Select form
const form = document.querySelector('form');

// Handle submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

// Validate all inputs
function validateInputs() {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const value = input.value.trim();

        // TODO: check if empty
        if (value === '')
            showError(input, `${input.placeholder} cannot be empty`);
        console.log(value, 'error');


        // TODO: check if email is valid
        if (value === 'email' && !isValidEmail(value)) {
            showError(input, 'Looks like this is not an email', true)
        }
        // TODO: otherwise mark success
        else {
            showSuccess(input)
        }
        console.log(value, 'click');
    });
}

// Show error state
function showError(input, message, isEmail = false) {
    // TODO: remove old error if exists
    let existsError = input.parentNode.querySelector('.error-message');
    if (existsError) existsError.remove();
    // TODO: style input as error
    input.classList.add('border-red-500');
    input.classList.remove('border-gray-900');
    // TODO: handle email-specific case (placeholder, etc.)
    input.style.backgroundImage = "url('./images/icon-error.svg')"
    input.style.backgroundRepeat = 'no-repeat'
    input.style.backgrounPosition = 'righ 1rem center'
    // TODO: add error message text
    if (!isEmail && input.type === 'email') {
        ;
        input.value = '';
        input.placeholder = 'email@example/com';
        input.classList.remove('placeholder-gray-400');
        input.classList.add('placeholder-red-500')
    }
}

// Show success state
function showSuccess(input) {
    // TODO: remove error if exists
    let existsError = input.parentNode.querySelector('.error-message');
    if (existsError) existsError.remove();
    // TODO: reset input styles to normal
    input.classList.remove('border-red-500')
    input.classList.add(border - gray - 900)
    // TODO: reset email placeholder if needed
    input.classList.remove('placeholder-red-500')
    input.classList.add('placeholder-gray-400')
}

// Email validation helper
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
