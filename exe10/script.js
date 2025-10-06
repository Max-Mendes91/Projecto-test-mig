const tempForm = document.querySelector('#tempForm');
const message = document.querySelector('#message');


tempForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Click');


    const temperature = parseFloat(document.querySelector('#temperature').value.trim())
    
    const oldMessage = document.querySelector('.message');
    if (oldMessage) oldMessage.remove();

    if (temperature === '' || isNaN(temperature)) {
        message.textContent = 'Please enter a valid temperature';
        message.style.color = 'orange';
        

    } else if (temperature < 0) {
        message.textContent = 'Freezing cold';
        message.style.color = 'blue'
        

    } else if (temperature >= 0 && temperature <= 20) {
        message.textContent = 'Cold day';
        message.style.color = 'aqua';
        

    } else if (temperature >= 20 && temperature <= 30) {
        message.textContent = 'Moderate';
        message.style.color = 'purple';

    } else{
        message.textContent = 'To hot';
        message.style.color = 'red';
    }
})

const users = [
    { name: 'Alice', score: 75 },
    { name: 'Bob', score: 52 },
    { name: 'Charlie', score: 90 },
    { name: 'Diana', score: 48 },
    { name: 'Eve', score: 68 }
];

const failing = users.filter(user => user.score < 60)
console.log(failing);

const nameFailledUser = failing.map(user => user.name)
console.log(nameFailledUser);

const updateUsers = users.map(user => ({
    ...user,
    status: user.score >=60 ? 'Pass' : 'Fail'
}))   
console.log(updateUsers);
 