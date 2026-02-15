<script>
const testimonials = document.querySelectorAll(".testimonial-item");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) {
            item.classList.add("active");
        }
    });
}

setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}, 4000);

const eventDate = new Date("March 5, 2026 00:00:00").getTime();

const timer = setInterval(function() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = 
            "<h3 style='color:#ff2d2d;'>TOURNAMENT STARTED!</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

}, 1000);

const form = document.getElementById("regForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input[required], select[required]");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid #333";
        }
    });

    if (!valid) {
        alert("Please complete all required fields.");
        return;
    }

    alert("🎉 Registration Successfully Submitted!\nSee you at NextTournament 2026!");

    form.reset();
});


const fadeElements = document.querySelectorAll(
    ".about, .highlight, .experience, .registration, .testimonial"
);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all 1s ease";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

fadeElements.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
});


const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

</script>
