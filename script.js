
const images = [
  "img/lion1.avif", "img/lion2.avif", "img/lion3.avif", "img/lion4.avif",
  "img/lion5.avif", "img/lion6.avif", "img/lion7.avif", "img/lion8.avif",
  "img/lion9.avif", "img/lion10.avif", "img/lion11.avif", "img/lion12.avif"
];

let currentIndex = 0;

function renderImages() {
  const container = document.getElementById("imageContainer");
  container.innerHTML = "";

  images.forEach((src, index) => {
    const div = document.createElement("div");
    div.className = "image-tile";
    div.onclick = () => showOverlay(index);
    div.innerHTML = `<img src="${src}" alt="Lion ${index + 1}" />`;
    container.appendChild(div);
  });
}

function showOverlay(index) {
  currentIndex = index;
  const overlay = document.getElementById("overlay");
  const img = document.getElementById("overlayImage");
  const text = document.getElementById("overlayText");
  img.src = images[index];
  text.innerText = `Bild ${index + 1}/${images.length}`;
  overlay.style.display = "flex";
}

function toggleOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function prevImage(event) {
  event.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
    showOverlay(currentIndex);
  }
}

function nextImage(event) {
  event.stopPropagation();
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showOverlay(currentIndex);
  }
}
