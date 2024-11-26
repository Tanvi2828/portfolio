// Toggle More Services
function toggleMoreServices() {
    const hiddenServices = document.querySelectorAll('.services-container .hidden, .services-container .service-box:not(.hidden)');
    const button = document.getElementById('show-more-btn');

    hiddenServices.forEach(service => {
        if (service.classList.contains('hidden')) {
            service.classList.remove('hidden');
        } else {
            service.classList.add('hidden');
        }
    });

    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
}

// Toggle More Projects
function toggleMoreProjects() {
    const hiddenProjects = document.querySelectorAll('.projects-container .hidden, .projects-container .project:not(.hidden)');
    const button = document.getElementById('see-more');

    hiddenProjects.forEach(project => {
        if (project.classList.contains('hidden')) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });

    button.textContent = button.textContent === 'See More' ? 'See Less' : 'See More';
}
// Modal Control
function showModal(title, description, link) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-link').href = link;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close Modal on Outside Click
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Submit Contact Form to Google Sheets
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw7Ia2N_1MKgQqAiDb7T8GTMz3VskRtOaawKjJWw0xZ25AsG0s_HSJN6nS8Vl5FvBEI/exec'; // Replace with your Web App URL
    const formData = new FormData(this);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            alert('Form submitted successfully!');
            this.reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('There was an error submitting the form. Please try again.');
        });
});

