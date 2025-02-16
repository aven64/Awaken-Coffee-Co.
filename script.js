document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor link behavior
            const sectionId = this.getAttribute("href").substring(1); // Get the section ID
            scrollToSection(sectionId);
        });
    });
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Example of form submission handling (basic alert)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
