document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Apply parallax effect to each section
    gsap.utils.toArray(".panel").forEach((panel) => {
        gsap.to(panel, {
            backgroundPositionY: "50%",
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Text animations for sections
    gsap.utils.toArray(".panel h2, .panel p").forEach((element) => {
        gsap.fromTo(element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            }}
        );
    });
});
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".parallax-text").forEach((text) => {
        gsap.to(text, {
            y: (i, el) => el.dataset.speed * 100, // Move text at different speeds
            ease: "none",
            scrollTrigger: {
                trigger: text,
                start: "top bottom",
                end: "bottom top",
                scrub: true, // Smooth parallax effect
            },
        });
    });
});

// Set up the parallax effect
document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    // Calculate the parallax effect based on mouse position
    const moveX = (x - centerX) / centerX * 10;  // Adjust the intensity of movement
    const moveY = (y - centerY) / centerY * 10;
  
    const earth = document.querySelector('.earth');
    const moon = document.querySelector('.moon');
  
    // Apply parallax effect to Earth and Moon
    earth.style.transform = `translate(-50%, -50%) rotate(${moveX}deg)`;
    moon.style.transform = `translateX(-50%) rotate(${moveX * 10}deg)`;
  });
  
