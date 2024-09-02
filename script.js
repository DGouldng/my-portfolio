document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the data to the backend
    fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById('contactForm').reset(); // Clear the form
        } else {
            alert('Oops! Something went wrong.');
        }
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again later.');
    });
});
