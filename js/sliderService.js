const slidesService = document.querySelector('.slidesService');
const slideService = document.querySelectorAll('.slideService');
const prevBtnService = document.getElementById('prevBtnService');
const nextBtnService = document.getElementById('nextBtnService');

let currentIndexService = 0;
const totalSlidesService = slideService.length;

function updateSliderPositionService() {
  slidesService.style.transform = `translateX(-${currentIndexService * 100}%)`;
}

nextBtnService.addEventListener('click', () => {
  if (currentIndexService < totalSlidesService - 1) {
    currentIndexService++;
  } else {
    currentIndexService = 0; // Возврат к первому слайду
  }
  updateSliderPositionService();
});

prevBtnService.addEventListener('click', () => {
  if (currentIndexService > 0) {
    currentIndexService--;
  } else {
    currentIndexService = totalSlidesService - 1; // Переход на последний слайд
  }
  updateSliderPositionService();
});