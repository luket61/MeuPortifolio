window.addEventListener("scroll", () => {
    document
        .querySelector(".portfolio-header")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// === FADE-IN COM INTERSECTION OBSERVER ===
const fadeElements = document.querySelectorAll(
    ".card, .projeto-card, .sobre-grid",
);
fadeElements.forEach((el) => el.classList.add("fade-in"));
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 },
);
fadeElements.forEach((el) => observer.observe(el));
// === SCROLL SUAVE COM JQUERY ===
$('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
        $("html, body").animate(
            {
                scrollTop: target.offset().top - 70,
            },
            600,
        );
    }
});