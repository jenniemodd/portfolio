const modal = document.getElementById("project-modal") as HTMLElement;
const title = document.getElementById("modal-title") as HTMLElement;
const description = document.getElementById("modal-description") as HTMLElement;
const tech = document.getElementById("modal-tech") as HTMLElement;
const liveLink = document.getElementById("modal-live") as HTMLAnchorElement;
const githubLink = document.getElementById("modal-github") as HTMLAnchorElement;

const cards = document.querySelectorAll(".project-card");
const closeBtn = document.querySelector(".close") as HTMLElement;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const element = card as HTMLElement;

    title.innerText = element.dataset.title!;
    description.innerText = element.dataset.description!;
    tech.innerText = element.dataset.tech!;

    liveLink.href = element.dataset.live!;
    githubLink.href = element.dataset.github!;

    modal.style.display = "flex";

    if (element.dataset.live) {
  liveLink.href = element.dataset.live;
  liveLink.style.display = "inline-block";
} else {
  liveLink.style.display = "none";
}

  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});




