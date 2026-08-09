// ===== MODAL ELEMENT =====

const modal = document.getElementById("project-modal") as HTMLElement;
const title = document.getElementById("modal-title") as HTMLElement;
const description = document.getElementById("modal-description") as HTMLElement;
const tech = document.getElementById("modal-tech") as HTMLElement;

const liveLink = document.getElementById("modal-live") as HTMLAnchorElement;
const githubLink = document.getElementById("modal-github") as HTMLAnchorElement;

const closeBtn = document.querySelector(".close") as HTMLElement;

const modalImage = document.getElementById("modal-image") as HTMLImageElement;
const modalAbout = document.getElementById("modal-about") as HTMLElement;


// ===== PROJECT CARDS =====

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const el = card as HTMLElement;

        // Bild
        modalImage.src = el.dataset.image || "";

        // Om uppdraget / projektet
        modalAbout.innerHTML =
            (el.dataset.about || "").replace(/\n/g, "<br>");

        // Titel
        title.textContent = el.dataset.title || "";

        // Beskrivning
        description.textContent = el.dataset.description || "";

        // Teknik
        tech.textContent = el.dataset.tech || "";


        // ===== LIVE-LÄNK =====

        if (el.dataset.live) {

            liveLink.href = el.dataset.live;

            liveLink.textContent =
                el.dataset.linktext || "Live demo";

            liveLink.style.display = "inline-block";

        } else {

            liveLink.style.display = "none";

        }


        // ===== GITHUB-LÄNK =====

        if (el.dataset.github) {

            githubLink.href = el.dataset.github;

            githubLink.style.display = "inline-block";

        } else {

            githubLink.style.display = "none";

        }


        // Visa modal

        modal.style.display = "flex";

    });

});


// ===== CLOSE MODAL =====

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}


// ===== HERO FADE-IN =====

const hero = document.querySelector(".hero-container");

window.addEventListener("load", () => {

    hero?.classList.add("visible");

});


// ===== HERO BILD =====

const heroImage =
    document.querySelector(".right-side img") as HTMLElement;

if (heroImage && window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        const x =
            (e.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (e.clientY / window.innerHeight - 0.5) * 20;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// ===== CHANGING TEXT =====

const changingText =
    document.getElementById("changing-text") as HTMLElement;

const words = [
    "Digital Marknadsförare",
    "Strategisk kreatör",
    "idéspruta",
    "Konverteringsjunkie"
];

let wordIndex = 0;

function changeText() {

    if (!changingText) return;

    changingText.style.opacity = "0";

    setTimeout(() => {

        changingText.textContent =
            words[wordIndex];

        changingText.style.opacity = "1";

        wordIndex =
            (wordIndex + 1) % words.length;

    }, 200);

    setTimeout(changeText, 2000);
}

changeText();