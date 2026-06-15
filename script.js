// Smooth scroll behavior for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add click effect to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
        });
    });

    // Add hover effect to career items
    document.querySelectorAll('.career-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const marker = this.querySelector('.career-marker');
            marker.style.transform = 'scale(1.3)';
            marker.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            const marker = this.querySelector('.career-marker');
            marker.style.transform = 'scale(1)';
        });
    });

    // Dynamic year in footer
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Lee Jae Eun. All rights reserved.`;
    }
});
