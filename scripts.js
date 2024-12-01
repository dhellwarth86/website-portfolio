function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerText = 'Message sent successfully!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }

    const projects = {
        project1: {
            title: "Amazing Web App",
            description: "This web app showcases modern, responsive design and integrates cutting-edge technologies like React, Node.js, and MongoDB."
        },
        project2: {
            title: "Interactive Dashboard",
            description: "An interactive data visualization dashboard featuring real-time updates, user-friendly UI, and seamless performance."
        },
        project3: {
            title: "3D Modeling Showcase",
            description: "A collection of my 3D models and animations. <a href='https://github.com/yourusername/project3' target='_blank'>View on GitHub</a>"
        }
    };
    
    
    function openModal(projectId) {
        const modal = document.getElementById("projectModal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
    
        modalTitle.textContent = projects[projectId].title;
        modalDescription.textContent = projects[projectId].description;
    
        modal.style.display = "flex"; // Show modal
    }
    
    function closeModal() {
        const modal = document.getElementById("projectModal");
        modal.style.display = "none"; // Hide modal
    }
    
    // Close modal if clicked outside
    window.onclick = function(event) {
        const modal = document.getElementById("projectModal");
        if (event.target === modal) {
            closeModal();
        }
    };
    
});
