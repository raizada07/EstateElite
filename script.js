document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for property upload
const uploadForm = document.querySelector('#upload-form');
if (uploadForm) {
    uploadForm.addEventListener('submit', function (e) {
        const title = document.querySelector('input[placeholder="Property Title"]').value;
        const price = document.querySelector('input[placeholder="Price"]').value;
        if (!title || price <= 0) {
            e.preventDefault();
            alert('Please enter a valid property title and price!');
        }
    });
}

// Button click animation
const contactButton = document.querySelector('button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert('Seller contacted!');
    });
}