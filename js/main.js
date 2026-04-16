function createArchiveCard(item) {
  const card = document.createElement("article");
  card.className = "archive-card";
  card.innerHTML = `
    <div class="archive-thumb">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="archive-content">
      <span class="archive-type">${item.type}</span>
      <h3>${item.title}</h3>
      <div class="archive-meta">${item.date} · ${item.city} · ${item.source}</div>
      <p>${item.summary}</p>
    </div>
  `;
  card.addEventListener("click", () => openArchiveModal(item));
  return card;
}

function createGalleryCard(item) {
  const card = document.createElement("article");
  card.className = "gallery-card";
  card.innerHTML = `
    <div class="gallery-thumb">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="gallery-content">
      <span class="gallery-category">${item.category}</span>
      <h3>${item.title}</h3>
      <div class="gallery-meta">${item.meta}</div>
      <p>${item.description}</p>
    </div>
  `;
  card.addEventListener("click", () => openGalleryModal(item));
  return card;
}
function createCoverCard(item) {
  const card = document.createElement("article");
  card.className = "cover-card";

  card.innerHTML = `
    <div class="cover-image-wrap">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="cover-content">
      <span class="cover-kicker">${item.type}</span>
      <h3>${item.title}</h3>
      <div class="cover-meta">${item.date} · ${item.city} · ${item.source}</div>
      <p>${item.summary}</p>
    </div>
  `;

  card.addEventListener("click", () => openCoverModal(item));
  return card;
}

function openCoverModal(item) {
  const modal = document.getElementById("coversModal");
  const modalImg = document.getElementById("coversModalImg");
  const modalType = document.getElementById("coversModalType");
  const modalTitle = document.getElementById("coversModalTitle");
  const modalMeta = document.getElementById("coversModalMeta");
  const modalSummary = document.getElementById("coversModalSummary");
  const modalText = document.getElementById("coversModalText");

  if (!modal || !modalImg || !modalType || !modalTitle || !modalMeta || !modalSummary || !modalText) {
    return;
  }

  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalType.textContent = item.type;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.date} · ${item.city} · ${item.source}`;
  modalSummary.textContent = item.summary;
  modalText.textContent = item.text;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function setupCoverModal() {
  const modal = document.getElementById("coversModal");
  const modalClose = document.getElementById("coversModalClose");

  if (!modal || !modalClose) return;

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function renderCoversPage() {
  const grid = document.getElementById("coversGrid");
  const emptyState = document.getElementById("coversEmpty");

  if (!grid || !Array.isArray(coverItems)) return;

  grid.innerHTML = "";

  coverItems.forEach(item => {
    grid.appendChild(createCoverCard(item));
  });

  if (emptyState) {
    emptyState.hidden = coverItems.length > 0;
  }
}

function openArchiveModal(item) {
  const modal = document.getElementById("archiveModal");
  const modalImg = document.getElementById("modalImg");
  const modalType = document.getElementById("modalType");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalSummary = document.getElementById("modalSummary");
  const modalText = document.getElementById("modalText");
  if (!modal || !modalImg || !modalType || !modalTitle || !modalMeta || !modalSummary || !modalText) return;
  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalType.textContent = item.type;
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.date} · ${item.city} · ${item.source}`;
  modalSummary.textContent = item.summary;
  modalText.textContent = item.text;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function openGalleryModal(item) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("galleryModalImg");
  const modalCategory = document.getElementById("galleryModalCategory");
  const modalTitle = document.getElementById("galleryModalTitle");
  const modalMeta = document.getElementById("galleryModalMeta");
  const modalDescription = document.getElementById("galleryModalDescription");
  if (!modal || !modalImg || !modalCategory || !modalTitle || !modalMeta || !modalDescription) return;
  modalImg.src = item.image;
  modalImg.alt = item.title;
  modalCategory.textContent = item.category;
  modalTitle.textContent = item.title;
  modalMeta.textContent = item.meta;
  modalDescription.textContent = item.description;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function setupArchiveModal() {
  const modal = document.getElementById("archiveModal");
  const modalClose = document.getElementById("modalClose");
  if (!modal || !modalClose) return;
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

function setupGalleryModal() {
  const modal = document.getElementById("galleryModal");
  const modalClose = document.getElementById("galleryModalClose");
  if (!modal || !modalClose) return;
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

function renderHomeTimeline() {
  const container = document.getElementById("homeTimeline");
  if (!container || !Array.isArray(timelineItems)) return;
  timelineItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderHomeArchive() {
  const grid = document.getElementById("homeArchiveGrid");
  if (!grid || !Array.isArray(archiveItems)) return;
  archiveItems.slice(0, 6).forEach((item) => grid.appendChild(createArchiveCard(item)));
}

function renderArchivePage() {
  const grid = document.getElementById("archiveGrid");
  const typeSelect = document.getElementById("filterType");
  const citySelect = document.getElementById("filterCity");
  const searchInput = document.getElementById("filterSearch");
  const emptyState = document.getElementById("archiveEmpty");
  if (!grid || !Array.isArray(archiveItems)) return;
  const types = [...new Set(archiveItems.map(item => item.type))].sort();
  const cities = [...new Set(archiveItems.map(item => item.city))].sort();
  if (typeSelect) {
    types.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
  }
  if (citySelect) {
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
  function applyFilters() {
    const selectedType = typeSelect?.value || "all";
    const selectedCity = citySelect?.value || "all";
    const search = (searchInput?.value || "").trim().toLowerCase();
    const filtered = archiveItems.filter(item => {
      const matchType = selectedType === "all" || item.type === selectedType;
      const matchCity = selectedCity === "all" || item.city === selectedCity;
      const haystack = `${item.title} ${item.source} ${item.city} ${item.summary} ${item.text}`.toLowerCase();
      const matchSearch = !search || haystack.includes(search);
      return matchType && matchCity && matchSearch;
    });
    grid.innerHTML = "";
    filtered.forEach(item => grid.appendChild(createArchiveCard(item)));
    if (emptyState) emptyState.hidden = filtered.length > 0;
  }
  typeSelect?.addEventListener("change", applyFilters);
  citySelect?.addEventListener("change", applyFilters);
  searchInput?.addEventListener("input", applyFilters);
  applyFilters();
}

function renderFullTimeline() {
  const container = document.getElementById("timelineFull");
  if (!container || !Array.isArray(timelineItems)) return;
  container.innerHTML = "";
  timelineItems.forEach((item) => {
    const linkedDocs = archiveItems.filter(doc => {
      const yearText = String(item.year);
      return doc.date.includes(yearText) || item.text.toLowerCase().includes(doc.city.toLowerCase());
    }).slice(0, 3);
    const entry = document.createElement("article");
    entry.className = "timeline-entry";
    entry.innerHTML = `
      <div class="timeline-entry-year">${item.year}</div>
      <div class="timeline-entry-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="timeline-entry-meta">Hito biográfico y artístico</div>
        <div class="timeline-entry-docs">
          ${linkedDocs.map(doc => `
            <button class="timeline-doc-tag" type="button">
              <span>${doc.type}</span> ${doc.city}
            </button>
          `).join("")}
        </div>
      </div>
    `;
    const buttons = entry.querySelectorAll(".timeline-doc-tag");
    buttons.forEach((btn, index) => btn.addEventListener("click", () => openArchiveModal(linkedDocs[index])));
    container.appendChild(entry);
  });
}

function renderGalleryPage() {
  const grid = document.getElementById("galleryGrid");
  const categorySelect = document.getElementById("galleryCategory");
  const searchInput = document.getElementById("gallerySearch");
  const emptyState = document.getElementById("galleryEmpty");
  if (!grid || !Array.isArray(galleryItems)) return;
  const categories = [...new Set(galleryItems.map(item => item.category))].sort();
  if (categorySelect) {
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }
  function applyFilters() {
    const selectedCategory = categorySelect?.value || "all";
    const search = (searchInput?.value || "").trim().toLowerCase();
    const filtered = galleryItems.filter(item => {
      const matchCategory = selectedCategory === "all" || item.category === selectedCategory;
      const haystack = `${item.title} ${item.meta} ${item.description}`.toLowerCase();
      const matchSearch = !search || haystack.includes(search);
      return matchCategory && matchSearch;
    });
    grid.innerHTML = "";
    filtered.forEach(item => grid.appendChild(createGalleryCard(item)));
    if (emptyState) emptyState.hidden = filtered.length > 0;
  }
  categorySelect?.addEventListener("change", applyFilters);
  searchInput?.addEventListener("input", applyFilters);
  applyFilters();
}

function setupRevealAnimation() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeTimeline();
  renderHomeArchive();
  renderArchivePage();
  renderFullTimeline();
  renderGalleryPage();
  renderCoversPage();
  setupArchiveModal();
  setupGalleryModal();
  setupCoverModal();
  setupRevealAnimation();

});
