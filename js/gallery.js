const imageSources = [
  "../images/gallery-img1.png",
  "../images/gallery-img2.png",
  "../images/gallery-img3.png",
  "../images/gallery-img4.png",
  "../images/gallery-img5.png",
  "../images/gallery-img6.png",
];
var currentSlideIndex = 0;

function nextSlide() {
  const isLastSlide = currentSlideIndex === imageSources.length - 1;
  currentSlideIndex = isLastSlide ? 0 : currentSlideIndex + 1;

  showSlide(currentSlideIndex);
}

function prevSlide() {
  const isFirstSlide = currentSlideIndex === 0;
  currentSlideIndex = isFirstSlide
    ? imageSources.length - 1
    : currentSlideIndex - 1;

  showSlide(currentSlideIndex);
}

function showSlide(i) {
  currentSlideIndex = i;
  const slide = document.getElementsByClassName("gallery-slide")[0];

  slide.innerHTML = "";

  const img = document.createElement("img");
  img.setAttribute("src", imageSources[i]);
  slide.append(img);

  showImages();
}

function showImages() {
  const galleryImagesEl = document.getElementsByClassName("gallery-images")[0];

  galleryImagesEl.innerHTML = "";

  const galleryImagesElements = imageSources.map((imageSrc, index) => {
    const galleryImageEl = document.createElement("div");
    galleryImageEl.setAttribute("class", "gallery-image");

    if (currentSlideIndex === index) {
      galleryImageEl.style.display = "none";
    }

    const img = document.createElement("img");
    img.setAttribute("src", imageSrc);
    img.setAttribute("class", "demo cursor");
    img.addEventListener("click", () => showSlide(index));

    galleryImageEl.append(img);

    return galleryImageEl;
  });

  galleryImagesElements.forEach((el) => {
    galleryImagesEl.append(el);
  });
}

showSlide(0);