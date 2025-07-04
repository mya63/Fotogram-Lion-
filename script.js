const images = [
  "img/lion1.avif", 
  "img/lion2.avif", 
  "img/lion3.avif", 
  "img/lion4.avif",
  "img/lion5.avif", 
  "img/lion6.avif", 
  "img/lion7.avif", 
  "img/lion8.avif",
  "img/lion9.avif", 
  "img/lion10.avif", 
  "img/lion11.avif", 
  "img/lion12.avif"
];

let currentIndex = 0;


 function renderImages() {
  const container = document.getElementById("imageContainer");
  let html = "";

  for (let i = 0; i < images.length; i++) {
    html += `
      <div class="image-tile" onclick="showOverlay(${i})">
        <img src="${images[i]}" alt="Lion ${i + 1}" />
      </div>
    `;
  }

  container.innerHTML = html;
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
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showOverlay(currentIndex);
}


function nextImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showOverlay(currentIndex);
}

