const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageContent = document.getElementById('message').value.trim();

    if (name === '' || email === '' || messageContent === '') {
        message.textContent = 'Please fill in all fields!';
        message.style.color = 'red';
    } else if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Your message has been sent!';
        message.style.color = 'green';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
