const gallery = document.getElementById("gallery");
const filtersContainer = document.getElementById("filters");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeLightboxButton = document.getElementById("close-lightbox");
const previousButton = document.getElementById("previous-media");
const nextButton = document.getElementById("next-media");

let activeTag = "all";
let visibleItems = [];
let currentIndex = 0;

function getAvailableTags() {
  const tags = new Set();

  mediaItems.forEach((item) => {
    item.tags.forEach((tag) => tags.add(tag));
  });

  return ["all", ...tags];
}

function createFilters() {
  filtersContainer.innerHTML = "";

  getAvailableTags().forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = tagLabels[tag] || tag;
    button.dataset.tag = tag;

    if (tag === activeTag) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeTag = tag;
      createFilters();
      renderGallery();
    });

    filtersContainer.appendChild(button);
  });
}

function filteredMedia() {
  if (activeTag === "all") {
    return mediaItems;
  }

  return mediaItems.filter((item) => item.tags.includes(activeTag));
}

function createMediaElement(item, preview = false) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.preload = preview ? "metadata" : "auto";
    video.muted = preview;
    video.playsInline = true;

    if (!preview) {
      video.controls = true;
      video.autoplay = true;
    }

    return video;
  }

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.title || "Photo de Krystal";
  image.loading = preview ? "lazy" : "eager";
  return image;
}

function renderGallery() {
  visibleItems = filteredMedia();
  gallery.innerHTML = "";
  emptyState.hidden = visibleItems.length !== 0;

  const label = visibleItems.length > 1 ? "souvenirs" : "souvenir";
  resultCount.textContent = `${visibleItems.length} ${label}`;

  visibleItems.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", `Ouvrir : ${item.title}`);

    const media = createMediaElement(item, true);
    card.appendChild(media);

    if (item.type === "video") {
      const badge = document.createElement("span");
      badge.className = "video-badge";
      badge.textContent = "▶";
      card.appendChild(badge);
    }

    const overlay = document.createElement("span");
    overlay.className = "card-overlay";

    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = item.title || "Souvenir de Krystal";

    const tags = document.createElement("span");
    tags.className = "card-tags";
    tags.textContent = item.tags
      .map((tag) => tagLabels[tag] || tag)
      .join(" · ");

    overlay.append(title, tags);
    card.appendChild(overlay);

    card.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(card);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const item = visibleItems[currentIndex];
  lightboxContent.innerHTML = "";
  lightboxContent.appendChild(createMediaElement(item, false));
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxContent.innerHTML = "";
  document.body.style.overflow = "";
}

function changeMedia(direction) {
  currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
  updateLightbox();
}

closeLightboxButton.addEventListener("click", closeLightbox);
previousButton.addEventListener("click", () => changeMedia(-1));
nextButton.addEventListener("click", () => changeMedia(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") changeMedia(-1);
  if (event.key === "ArrowRight") changeMedia(1);
});

createFilters();
renderGallery();
