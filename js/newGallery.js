var imagesSrc = [];
var currentSlideIndex = 0;

function getImages(srcs) {
    imagesSrc = srcs;
}

function showSlide(i) {
    const slide = document.getElementsByClassName("slide")[0];

    if (slide.hasChildNodes()) {
        slide.childNodes.forEach((node) => {
            node.remove()
        });
    }

    const img = document.createElement("img");
    img.setAttribute("src", imagesSrc[i]);
    slide.append(img);
}

function nextSlide() {
    if (currentSlideIndex === imagesSrc.length - 1) {
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);
        return;
    }
    currentSlideIndex += 1;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    if (currentSlideIndex < 0) {
        currentSlideIndex = imagesSrc.length - 1;
        showSlide(currentSlideIndex);
        return;
    }
    currentSlideIndex -= 1;
    showSlide(currentSlideIndex);
}