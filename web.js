// app.js - Main JavaScript file for The Last Days Evangelism Ministries website

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "church-website-7882d.firebaseapp.com",
    projectId: "church-website-7882d",
    storageBucket: "church-website-7882d.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase (commented out for safety - uncomment when you add your config)
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Set copyright year
    setCopyrightYear();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize sermon tabs
    initSermonTabs();

    // Initialize sermon filters
    initSermonFilters();

    // Load events from database (simulated)
    loadEvents();

    // Load sermons from database (simulated)
    loadSermons();

    // Initialize partnership form
    initPartnershipForm();

    // Initialize scroll animations
    initScrollAnimations();
}

// Set current year in copyright
function setCopyrightYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            // Change icon based on menu state
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && !event.target.closest('.mobile-menu')) {
                navMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Sermon tabs functionality
function initSermonTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Sermon category filters
function initSermonFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter category
            const category = this.getAttribute('data-category');

            // Filter sermons
            filterSermons(category);
        });
    });
}

// Filter sermons by category
function filterSermons(category) {
    const sermonCards = document.querySelectorAll('.sermon-card');

    sermonCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Load events from database (simulated)
function loadEvents() {
    // In a real implementation, you would fetch this from Firebase
    const eventData = [
        {
            title: "Sunday Worship Service",
            date: "Every Sunday at 09:00 AM",
            description: "Join us for powerful worship and the Word of God.",
            image: "https://placehold.co/600x400/4a6f28/white?text=Sunday+Service"
        },
        {
            title: "Thursday Bible Study",
            date: "Every Thursday at 10:00 AM",
            description: "Deep dive into God's Word with Apostle Mothushi Chuene.",
            image: "https://placehold.co/600x400/4a6f28/white?text=Bible+Study"
        },
        {
            title: "Weekly Prayer Meeting",
            date: "Every Monday at 6:00 PM",
            description: "Corporate prayer for breakthroughs and miracles.",
            image: "https://placehold.co/600x400/4a6f28/white?text=Prayer+Meeting"
        }
    ];

    const eventsContainer = document.getElementById('event-cards');
    if (eventsContainer) {
        // Clear existing content
        eventsContainer.innerHTML = '';

        // Add events to container
        eventData.forEach(event => {
            eventsContainer.appendChild(createEventCard(event));
        });
    }
}

// Create event card element
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card fade-in';

    eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="event-card-content">
            <h3>${event.title}</h3>
            <p class="date">${event.date}</p>
            <p>${event.description}</p>
        </div>
    `;

    return eventCard;
}

// Load sermons from database (simulated)
function loadSermons() {
    // In a real implementation, you would fetch this from Firebase
    const sermonData = {
        recent: [
            {
                title: "The Journey of Faith",
                date: "August 20, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "Exploring the path of faith and how to strengthen your relationship with God.",
                image: "https://placehold.co/600x400/4a6f28/white?text=Faith+Journey",
                category: "teaching",
                watchLink: "#",
                downloadLink: "#"
            },
            {
                title: "Experiencing God's Love",
                date: "August 13, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "Understanding the depth of God's love and how to receive it in your life.",
                image: "https://placehold.co/600x400/4a6f28/white?text=God's+Love",
                category: "inspirational",
                watchLink: "#",
                downloadLink: "#"
            },
            {
                title: "The Power of the Holy Spirit",
                date: "August 6, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "Discover how to tap into the power of the Holy Spirit in your daily life.",
                image: "https://placehold.co/600x400/4a6f28/white?text=Holy+Spirit",
                category: "teaching",
                watchLink: "#",
                downloadLink: "#"
            }
        ],
        popular: [
            {
                title: "Breakthrough Prayers",
                date: "July 16, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "Powerful prayers that bring breakthroughs in difficult situations.",
                image: "https://placehold.co/600x400/4a6f28/white?text=Breakthrough",
                category: "prayer",
                watchLink: "#",
                downloadLink: "#"
            },
            {
                title: "Biblical Principles of Finance",
                date: "June 25, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "God's principles for financial freedom and blessing.",
                image: "https://placehold.co/600x400/4a6f28/white?text=Financial+Blessing",
                category: "teaching",
                watchLink: "#",
                downloadLink: "#"
            },
            {
                title: "Divine Healing",
                date: "May 30, 2025",
                speaker: "Apostle Mothushi Chuene",
                description: "Understanding God's power to heal and restore wholeness.",
                image: "https://placehold.co/600x400/4a6f28/white?text=Healing",
                category: "testimony",
                watchLink: "#",
                downloadLink: "#"
            }
        ]
    };

    const recentContainer = document.querySelector('#recent .sermon-cards');
    const popularContainer = document.querySelector('#popular .sermon-cards');

    if (recentContainer) {
        // Clear existing content
        recentContainer.innerHTML = '';

        // Add sermons to container
        sermonData.recent.forEach((sermon, index) => {
            recentContainer.appendChild(createSermonCard(sermon, index));
        });
    }

    if (popularContainer) {
        // Clear existing content
        popularContainer.innerHTML = '';

        // Add sermons to container
        sermonData.popular.forEach((sermon, index) => {
            popularContainer.appendChild(createSermonCard(sermon, index));
        });
    }
}

// Create sermon card element
function createSermonCard(sermon, delayIndex) {
    const sermonCard = document.createElement('div');
    sermonCard.className = `sermon-card fade-in delay-${delayIndex % 3}`;
    sermonCard.setAttribute('data-category', sermon.category);

    sermonCard.innerHTML = `
        <img src="${sermon.image}" alt="${sermon.title}">
        <div class="sermon-card-content">
            <h3>${sermon.title}</h3>
            <p class="date">${sermon.date}</p>
            <p class="speaker">${sermon.speaker}</p>
            <p>${sermon.description}</p>
            <div class="sermon-actions">
                <a href="${sermon.watchLink}" class="btn" target="_blank">
                    <i class="fas fa-play-circle"></i> Watch
                </a>
                <a href="${sermon.downloadLink}" class="btn btn-primary" target="_blank">
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        </div>
    `;

    return sermonCard;
}

// Initialize partnership form
function initPartnershipForm() {
    const partnershipForm = document.getElementById('partnership-form');

    if (partnershipForm) {
        partnershipForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(partnershipForm);
            const partnershipType = formData.get('partnership-type');
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // In a real implementation, you would save this to a database
            console.log('Partnership form submitted:', {
                partnershipType,
                name,
                email,
                message
            });

            // Show success message
            alert('Thank you for your interest in partnering with us! We will contact you soon.');

            // Reset form
            partnershipForm.reset();
        });
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');

    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Sermon series functionality
function loadSermonSeries() {
    // In a real implementation, you would fetch this from Firebase
    const seriesData = [
        {
            title: "Review Reflect Rest",
            image: "RRR.jpeg",
            sermonCount: 5,
            description: "A deep dive into what it means to live by faith."
        },
        {
            title: "The Power of Prayer",
            image: "https://placehold.co/600x400/4a6f28/white?text=Prayer+Series",
            sermonCount: 4,
            description: "Discover how prayer can transform your life and circumstances."
        },
        {
            title: "Walking in Victory",
            image: "https://placehold.co/600x400/4a6f28/white?text=Victory+Series",
            sermonCount: 6,
            description: "Learn how to live a victorious Christian life in challenging times."
        }
    ];

    const seriesContainer = document.getElementById('series-list');
    if (seriesContainer) {
        // Clear existing content
        seriesContainer.innerHTML = '';

        // Add series to container
        seriesData.forEach((series, index) => {
            seriesContainer.appendChild(createSeriesCard(series, index));
        });
    }
}

// Create series card element
function createSeriesCard(series, delayIndex) {
    const seriesCard = document.createElement('div');
    seriesCard.className = `series-item fade-in delay-${delayIndex % 3}`;

    seriesCard.innerHTML = `
        <div class="series-image">
            <img src="${series.image}" alt="${series.title}">
        </div>
        <div class="series-content">
            <h3>${series.title}</h3>
            <p>${series.description}</p>
            <span class="series-count">${series.sermonCount} sermons</span>
        </div>
    `;

    return seriesCard;
}

// Live stream functionality
function initLiveStream() {
    const liveIndicator = document.getElementById('live-indicator');
    const streamContainer = document.querySelector('.stream-container');

    // Simulate checking if live stream is active
    // In a real implementation, you would check your streaming service API
    const isLive = Math.random() > 0.5; // Randomly true or false for demo

    if (isLive && liveIndicator) {
        liveIndicator.style.display = 'block';

        // Add a click event to expand the stream
        liveIndicator.addEventListener('click', function() {
            streamContainer.classList.toggle('expanded');

            if (streamContainer.classList.contains('expanded')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Event countdown functionality
function initEventCountdown() {
    const countdownElements = document.querySelectorAll('.event-countdown');

    countdownElements.forEach(element => {
        const eventDate = new Date(element.getAttribute('data-date'));
        updateCountdown(element, eventDate);

        // Update countdown every second
        setInterval(() => {
            updateCountdown(element, eventDate);
        }, 1000);
    });
}

// Update event countdown
function updateCountdown(element, eventDate) {
    const now = new Date();
    const timeRemaining = eventDate - now;

    if (timeRemaining <= 0) {
        element.textContent = 'Event in progress';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Newsletter subscription
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = newsletterForm.querySelector('input[type="email"]').value;

            // In a real implementation, you would save this to a database
            console.log('Newsletter subscription:', email);

            // Show success message
            alert('Thank you for subscribing to our newsletter!');

            // Reset form
            newsletterForm.reset();
        });
    }
}

// Social media share functionality
function initSocialShare() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl;

            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
                    break;
                default:
                    return;
            }

            window.open(shareUrl, '_blank');
        });
    });
}

// Initialize audio player for sermon audio
function initAudioPlayer() {
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playBtn = player.querySelector('.play-btn');
        const progress = player.querySelector('.progress');
        const currentTime = player.querySelector('.current-time');
        const duration = player.querySelector('.duration');

        // Play/Pause functionality
        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Update progress bar
        audio.addEventListener('timeupdate', function() {
            const percent = (audio.currentTime / audio.duration) * 100;
            progress.value = percent;

            // Update time displays
            currentTime.textContent = formatTime(audio.currentTime);
            duration.textContent = formatTime(audio.duration);
        });

        // Seek functionality
        progress.addEventListener('input', function() {
            const seekTime = (this.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        });

        // Reset play button when audio ends
        audio.addEventListener('ended', function() {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            progress.value = 0;
            currentTime.textContent = '0:00';
        });
    });
}

// Format time for audio player (mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Initialize image lazy loading
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize all functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);