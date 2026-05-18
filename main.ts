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


const facts = [
  "Bosatt i Funäsdalen sedan 2021 ⛰️",
  "Dogmom till en Golden Retriever blandis 🐕",
  "Mitt i en renovering av en 50-talsvilla 🏠",
  "Tog grönt kort i somras ⛳",
  "Kanske en av de sista padelspelarna 😄",
  "Ut på tur, aldrig sur-person! 🥾",
  "Åkte vasaloppet i vintras! 🏅"
];

const factText = document.getElementById("fun-fact-text") as HTMLElement;
const factBtn = document.getElementById("new-fact-btn") as HTMLButtonElement;

function showRandomFact() {
  if (!factText) return;

  factText.style.opacity = "0";

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
    factBtn.textContent = "Ge mig en till!";
    factText.style.opacity = "1";
  }, 200);
}

// första laddning
showRandomFact();

// klick
factBtn.addEventListener("click", showRandomFact);

// ===== PROJECT CARDS =====
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {

 const el = card as HTMLElement;

modalImage.src = el.dataset.image || "";

modalAbout.innerHTML =
  (el.dataset.about || "").replace(/\n/g, "<br>");

title.textContent = el.dataset.title || "";
description.textContent = el.dataset.description || "";
tech.textContent = el.dataset.tech || "";

    // Live länk (visa/dölj)
    if (el.dataset.live) {
      liveLink.href = el.dataset.live;
      liveLink.style.display = "inline-block";
    } else {
      liveLink.style.display = "none";
    }

    // GitHub länk
    githubLink.href = el.dataset.github || "#";

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



// ===== PARALLAX (optional, kan tas bort om du vill) =====
const heroImage = document.querySelector(".right-side img") as HTMLElement;

if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}


// ===== CHANGING TEXT =====
const changingText = document.getElementById("changing-text") as HTMLElement;

const words = [
  "Digital Marknadsförare",
  "UX-nörd",
  "idéspruta",
  "konverteringsjunkie"
];

let wordIndex = 0;

function changeText() {
  if (!changingText) return;

  changingText.style.opacity = "0";

  setTimeout(() => {
    changingText.textContent = words[wordIndex];
    changingText.style.opacity = "1";
    wordIndex = (wordIndex + 1) % words.length;
  }, 200);

  setTimeout(changeText, 2000);
}

changeText();