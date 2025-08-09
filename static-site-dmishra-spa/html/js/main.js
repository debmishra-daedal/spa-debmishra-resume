// Main JavaScript functionality for the portfolio site

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update active nav link
            updateActiveNavLink(this);
        });
    });
    
    // Function to update active navigation link
    function updateActiveNavLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('bg-cyan-600', 'text-white');
            link.classList.add('text-gray-800');
        });
        
        activeLink.classList.remove('text-gray-800');
        activeLink.classList.add('bg-cyan-600', 'text-white');
    }
    
    // Intersection Observer for automatic nav highlighting
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNavLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (targetNavLink) {
                    updateActiveNavLink(targetNavLink);
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add hover effects for company logos and education items
    const hoverElements = document.querySelectorAll('.logo-bg, .company-link, .education-item a');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add fade-in animation for work items
    const workItems = document.querySelectorAll('#work .mb-8');
    const workObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                workObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    workItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        workObserver.observe(item);
    });
    
    // Mobile menu handling (if needed for future responsiveness)
    const handleResize = () => {
        if (window.innerWidth < 768) {
            // Mobile-specific adjustments if needed
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate profile image on load
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.opacity = '0';
            profileImg.style.transform = 'scale(0.8)';
            profileImg.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                profileImg.style.opacity = '1';
                profileImg.style.transform = 'scale(1)';
            }, 300);
        }
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('a[class*="bg-"], button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.3);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loaded {
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});