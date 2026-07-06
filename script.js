// Fade in animation
window.addEventListener("load", () => {
    document.querySelector(".card").style.opacity = "1";
});

// Floating profile animation
const profile = document.querySelector(".profile");

let angle = 0;

function floatProfile() {
    angle += 0.03;
    profile.style.transform = `translateY(${Math.sin(angle) * 8}px)`;
    requestAnimationFrame(floatProfile);
}

if (profile) {
    floatProfile();
}

// Button click animation
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// Dynamic copyright year
const footer = document.querySelector("footer");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} $HUBHAM PATEL`;
}