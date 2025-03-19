// Function to observe each section and add a class when it is visible
const sections = document.querySelectorAll('.section');

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger the callback when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // Stop observing once the section is visible
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

