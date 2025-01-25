const slidesDoctor = document.querySelector('.slidesDoctor');
const slideDoctor = document.querySelectorAll('.slideDoctor');
const prevBtnDoctor = document.getElementById('prevBtnDoctor');
const nextBtnDoctor = document.getElementById('nextBtnDoctor');

let currentIndexDoctor = 0;
const totalSlidesDoctor = slideDoctor.length;

function updateSliderPositionDoctor() {
  slidesDoctor.style.transform = `translateX(-${currentIndexDoctor * 100}%)`;
}

nextBtnDoctor.addEventListener('click', () => {
  if (currentIndexDoctor < totalSlidesDoctor - 1) {
    currentIndexDoctor++;
  } else {
    currentIndexDoctor = 0; // Возврат к первому слайду
  }
  updateSliderPositionDoctor();
});

prevBtnDoctor.addEventListener('click', () => {
  if (currentIndexDoctor > 0) {
    currentIndexDoctor--;
  } else {
    currentIndexDoctor = totalSlidesDoctor - 1; // Переход на последний слайд
  }
  updateSliderPositionDoctor();
});