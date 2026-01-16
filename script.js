      // Testimonials Data
        const testimonials = [
            {
                quote: "Working with Landmark was a seamless experience. Their attention to detail and commitment to quality made our dream home a reality.",
                author: "Qadir Bux",
                role: "Homeowner"
            },
            {
                quote: "The team's professionalism and expertise transformed our space beyond expectations. Highly recommend their services.",
                author: "M Mitahl",
                role: "Business Owner"
            },
            {
                quote: "From concept to completion, every step was handled with care and precision. Outstanding work!",
                author: "Ibrar Zardari",
                role: "Interior Designer"
            }
        ];

        // Scrolling Words
        const scrollWords = [
            "homes",
            "lifestyles",
            "interiors",
            "We create",
            "communities",
            "spaces",
            "landmarks",
            "experiences"
        ];

        let currentTestimonialIndex = 0;

        // Initialize Scroll Words Animation
        function initScrollWords() {
            const scrollWordsContainer = document.getElementById('scrollWords');
            scrollWordsContainer.innerHTML = '';

            scrollWords.forEach((word, index) => {
                const wordElement = document.createElement('div');
                wordElement.className = 'word';
                if (word === 'We create') {
                    wordElement.classList.add('highlight');
                }
                wordElement.textContent = word;
                wordElement.style.animationDelay = `${index * 0.15}s`;
                scrollWordsContainer.appendChild(wordElement);
            });
        }

        // Update Testimonial Display
        function updateTestimonial(index) {
            const testimonial = testimonials[index];
            document.getElementById('testimonialQuote').textContent = `"${testimonial.quote}"`;
            document.getElementById('authorName').textContent = testimonial.author;
            document.getElementById('authorRole').textContent = testimonial.role;
            document.getElementById('authorAvatar').textContent = testimonial.author.charAt(0);

            // Add fade animation
            const card = document.getElementById('testimonialCard');
            card.style.opacity = '0.7';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 100);
        }

        // Navigation Functions
        function showPrevious() {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(currentTestimonialIndex);
        }

        function showNext() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial(currentTestimonialIndex);
        }

        // Event Listeners
        document.getElementById('prevBtn').addEventListener('click', showPrevious);
        document.getElementById('nextBtn').addEventListener('click', showNext);

        // Initialize on Page Load
        window.addEventListener('DOMContentLoaded', () => {
            initScrollWords();
            updateTestimonial(0);
        });