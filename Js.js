// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Feed Cost Calculator
function calculateFeedCost() {
    const feedPrice = document.getElementById('feedPrice').value;
    const flockSize = document.getElementById('flockSize').value;
    if (feedPrice && flockSize) {
        const totalCost = feedPrice * flockSize;
        document.getElementById('result').textContent = `Total Feed Cost: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values.';
    }
}

// Contact Form Submission (Demo Alert)
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
});
