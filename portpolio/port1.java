// This script is currently empty because the resume is a static site.
// You can add JavaScript here for future interactive features.
// For example, you could add a script to show/hide sections,
// or to create a simple "copy to clipboard" button for the email address.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio page loaded successfully!');

    // Example of a small interactive feature
    const nameElement = document.querySelector('.name');
    nameElement.addEventListener('mouseover', () => {
        nameElement.style.color = '#3498db';
    });
    nameElement.addEventListener('mouseout', () => {
        nameElement.style.color = 'var(--text-color)';
    });
});