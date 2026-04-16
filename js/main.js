const CARD_SELECTORS = '.archive-card, .gallery-card, .cover-card, .infancy-card, .audiovisual-card';

function setupRevealAnimation() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach(el => obs.observe(el));
}

function renderHomeTimeline() {
  const container = document.getElementById('homeTimeline');
  if (!container || !Array.isArray(timelineItems)) return;

  timelineItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'timeline-item';
    card.innerHTML = `<div class="timeline-year">${item.year}</div><div class="timeline-content"><h3>${item.title}</h3><p>${item.text}</p></div>`;
    container.appendChild(card);
  });
}

function createArchiveCard(item) {
  const card = document.createElement('article');
  card.className = 'archive-card';
  card.innerHTML = `<div class="archive-thumb"><img src="${item.image}" alt="${item.title}"></div><div class="archive-content"><span class="archive-type">${item.type}</span><h3>${item.title}</h3><div class="archive-meta">${item.meta}</div><p>${item.summary}</p></div>`;
  return card;
}

function createGalleryCard(item) {
  const card = document.createElement('article');
  card.className = 'gallery-card';
  card.innerHTML = `<div class="gallery-thumb"><img src="${item.image}" alt="${item.title}"></div><div class="gallery-content"><span class="gallery-category">${item.category}</span><h3>${item.title}</h3><div class="gallery-meta">${item.meta}</div><p>${item.description}</p></div>`;
  return card;
}

function createCoverCard(item) {
  const card = document.createElement('article');
  card.className = 'cover-card';
  card.innerHTML = `<div class="cover-image-wrap"><img src="${item.image}" alt="${item.title}"></div><div class="cover-content"><span class="cover-kicker">${item.type}</span><h3>${item.title}</h3><div class="cover-meta">${item.date}</div><p>${item.summary}</p></div>`;
  return card;
}

function createInfancyCard(item) {
  const card = document.createElement('article');
  card.className = 'infancy-card';
  card.innerHTML = `<div class="infancy-thumb"><img src="${item.image}" alt="${item.title}"></div><div class="infancy-content"><span class="infancy-category">${item.category}</span><h3>${item.title}</h3><div class="infancy-meta">${item.meta}</div><p>${item.description}</p></div>`;
  return card;
}

function createAudiovisualCard(item) {
  const card = document.createElement('article');
  card.className = 'audiovisual-card';
  card.innerHTML = `<a href="${item.url}" target="_blank" class="video-link"><div class="video-thumb"><img src="https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg" alt="${item.title}"><span class="play">▶</span></div><div class="video-info"><h3>${item.title}</h3><p>${item.description || ''}</p><span class="source">Ver en YouTube →</span></div></a>`;
  return card;
}

function renderHomeArchive() {
  const grid = document.getElementById('homeArchiveGrid');
  if (!grid) return;
  archiveItems.slice(0, 3).forEach(item => grid.appendChild(createArchiveCard(item)));
}

function renderHomeCovers() {
  const grid = document.getElementById('homeCoversGrid');
  if (!grid) return;
  coverItems.slice(0, 3).forEach(item => grid.appendChild(createCoverCard(item)));
}

function renderHomeInfancy() {
  const grid = document.getElementById('homeInfancyGrid');
  if (!grid) return;
  infancyItems.slice(0, 3).forEach(item => grid.appendChild(createInfancyCard(item)));
}

function renderArchivePage() {
  const grid = document.getElementById('archiveGrid');
  if (!grid) return;
  grid.innerHTML = '';
  archiveItems.forEach(item => grid.appendChild(createArchiveCard(item)));
}

function renderGalleryPage() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  galleryItems.forEach(item => grid.appendChild(createGalleryCard(item)));
}

function renderCoversPage() {
  const grid = document.getElementById('coversGrid');
  if (!grid) return;
  grid.innerHTML = '';
  coverItems.forEach(item => grid.appendChild(createCoverCard(item)));
}

function renderHomeGallery() {
  const grid = document.getElementById('homeGalleryGrid');
  if (!grid) return;
  galleryItems.slice(0, 3).forEach(item => grid.appendChild(createGalleryCard(item)));
}

function renderHomeAudiovisual() {
  const grid = document.getElementById('homeAudiovisualGrid');
  if (!grid) return;
  audiovisualItems.forEach(item => grid.appendChild(createAudiovisualCard(item)));
}

function createImageDialog() {
  const dialog = document.createElement('dialog');
  dialog.className = 'image-dialog';
  dialog.innerHTML = `<div class="image-dialog-panel"><button type="button" class="image-dialog-close" aria-label="Cerrar imagen">×</button><img class="image-dialog-img" src="" alt=""><p class="image-dialog-caption"></p></div>`;
  document.body.appendChild(dialog);

  const closeButton = dialog.querySelector('.image-dialog-close');
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  return dialog;
}

function setupCardImageDialog() {
  const dialog = createImageDialog();
  const dialogImage = dialog.querySelector('.image-dialog-img');
  const dialogCaption = dialog.querySelector('.image-dialog-caption');

  document.addEventListener('click', event => {
    const card = event.target.closest(CARD_SELECTORS);
    if (!card) return;

    const image = card.querySelector('img');
    if (!image) return;

    if (event.target.closest('a')) {
      event.preventDefault();
    }

    const title = card.querySelector('h3');
    const alt = image.alt || title?.textContent?.trim() || 'Imagen del archivo';

    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = alt;
    dialogCaption.textContent = alt;
    dialog.showModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeTimeline();
  renderHomeArchive();
  renderHomeCovers();
  renderHomeInfancy();
  renderHomeGallery();
  renderHomeAudiovisual();
  renderArchivePage();
  renderGalleryPage();
  renderCoversPage();
  setupCardImageDialog();
  setupRevealAnimation();
});
