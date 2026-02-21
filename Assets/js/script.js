/**
 * Golden Harvest - Honey Products Carousel Webapp
 * Premium interactive functionality
 */

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

class HoneyCarousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('indicators');
        this.wrapper = document.querySelector('.carousel-wrapper');

        // Only initialize if carousel elements exist
        if (!this.track || !this.wrapper || !this.prevBtn || !this.nextBtn || !this.indicatorsContainer) {
            return;
        }

        this.cards = document.querySelectorAll('.product-card');
        this.gap = 32;
        this.totalCards = this.cards.length;
        this.currentIndex = 0;
        this.maxIndex = this.totalCards - 1;

        this.init();
    }

    init() {
        this.createIndicators();
        this.attachEventListeners();
        this.updateButtons();
    }

    getCardWidth() {
        return window.innerWidth >= 768 ? 320 : 280;
    }

    createIndicators() {
        this.indicatorsContainer.innerHTML = '';

        for (let i = 0; i < this.totalCards; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            indicator.setAttribute('aria-label', `Go to product ${i + 1}`);
            if (i === 0) indicator.classList.add('active');

            indicator.addEventListener('click', () => {
                this.goToSlide(i);
            });

            this.indicatorsContainer.appendChild(indicator);
        }
    }

    attachEventListeners() {
        // Desktop button navigation
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Listen to scroll events to update indicators
        this.wrapper.addEventListener('scroll', () => {
            const scrollLeft = this.wrapper.scrollLeft;
            const cardWidth = this.getCardWidth() + this.gap;
            const newIndex = Math.round(scrollLeft / cardWidth);

            if (newIndex !== this.currentIndex && newIndex >= 0 && newIndex <= this.maxIndex) {
                this.currentIndex = newIndex;
                this.updateIndicators();
                this.updateButtons();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.scrollToCard();
        }
    }

    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.scrollToCard();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index <= this.maxIndex) {
            this.currentIndex = index;
            this.scrollToCard();
        }
    }

    scrollToCard() {
        const cardWidth = this.getCardWidth() + this.gap;
        this.wrapper.scrollTo({
            left: this.currentIndex * cardWidth,
            behavior: 'smooth'
        });
        this.updateIndicators();
        this.updateButtons();
    }

    updateIndicators() {
        const indicators = this.indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === this.currentIndex);
        });
    }

    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.maxIndex;
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
        this.nextBtn.style.opacity = this.currentIndex === this.maxIndex ? '0.3' : '1';
    }

    startAutoPlay() {
        if (this.autoPlayInterval) return;
        this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// ============================================
// FLOATING PARTICLES
// ============================================

class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
        this.particleCount = 8; // Reduced from 20 for better performance
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle(i);
        }
    }

    createParticle(index) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning and timing
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${(index / this.particleCount) * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;

        // Random sizes
        const size = 4 + Math.random() * 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random opacity
        particle.style.opacity = 0.1 + Math.random() * 0.3;

        this.container.appendChild(particle);
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

class NavbarEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = 0;
        this.ticking = false;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.lastScrollY = window.scrollY;
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateNavbar();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        }, { passive: true });
    }

    updateNavbar() {
        if (this.lastScrollY > 100) {
            this.navbar.style.background = 'rgba(28, 25, 23, 0.95)';
            this.navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            this.navbar.style.background = 'rgba(28, 25, 23, 0.8)';
            this.navbar.style.boxShadow = 'none';
        }
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// NEWSLETTER FORM
// ============================================

function handleSubscribe(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;

    // Show success feedback
    const button = form.querySelector('button');
    const originalText = button.textContent;

    button.textContent = '✓ Subscribed!';
    button.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        form.reset();
    }, 3000);

    console.log(`Newsletter subscription: ${email}`);
}

// ============================================
// ADD TO CART ANIMATION
// ============================================

function initAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const originalText = this.textContent;

            // Animate button
            this.textContent = '✓ Added!';
            this.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            // Create flying animation effect
            const card = this.closest('.product-card');
            const img = card.querySelector('.product-image');
            const clone = img.cloneNode(true);

            clone.style.cssText = `
                position: fixed;
                top: ${img.getBoundingClientRect().top}px;
                left: ${img.getBoundingClientRect().left}px;
                width: ${img.offsetWidth}px;
                height: ${img.offsetHeight}px;
                z-index: 9999;
                pointer-events: none;
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            `;

            document.body.appendChild(clone);

            requestAnimationFrame(() => {
                clone.style.top = '20px';
                clone.style.right = '100px';
                clone.style.left = 'auto';
                clone.style.transform = 'scale(0.1) rotate(360deg)';
                clone.style.opacity = '0';
            });

            setTimeout(() => {
                clone.remove();
            }, 800);

            // Reset button
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Animate feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ============================================
// IMAGE LIGHTBOX MODAL
// ============================================

function initImageModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="image-modal" id="globalImageModal">
            <span class="image-modal-close" id="globalImageModalClose">&times;</span>
            <img class="image-modal-content" id="globalImageModalImg">
        </div>
    `;

    // Append to body if not already there
    if (!document.getElementById('globalImageModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('globalImageModal');
    const modalImg = document.getElementById('globalImageModalImg');
    const closeBtn = document.getElementById('globalImageModalClose');
    const images = document.querySelectorAll('.product-image'); // select all product images

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new HoneyCarousel();
    new ParticleSystem();
    new NavbarEffect();

    // Initialize interactive elements
    initAddToCartButtons();
    initScrollAnimations();
    initImageModal();

    console.log('🍯 Golden Harvest loaded successfully!');
});

// Expose function for HTML onclick
window.scrollToProducts = scrollToProducts;
window.handleSubscribe = handleSubscribe;
