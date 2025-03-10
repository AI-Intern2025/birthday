document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
