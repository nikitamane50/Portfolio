document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you, ${name}! I will get back to you shortly.`);
        // Here you can add actual form submission or email functionality
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
