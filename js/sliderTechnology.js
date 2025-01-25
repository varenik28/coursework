const slidesTechnology = document.querySelector('.slidesTechnology');
const slideTechnology = document.querySelectorAll('.slideTechnology');
const prevBtnTechnology = document.getElementById('prevBtnTechnology');
const nextBtnTechnology = document.getElementById('nextBtnTechnology');

let currentIndexTechnology = 0;
const totalSlidesTechnology = slideTechnology.length;

function updateSliderPositionTechnology() {
  slidesTechnology.style.transform = `translateX(-${currentIndexTechnology * 100}%)`;
}

nextBtnTechnology.addEventListener('click', () => {
  if (currentIndexTechnology < totalSlidesTechnology - 1) {
    currentIndexTechnology++;
  } else {
    currentIndexTechnology = 0; // Возврат к первому слайду
  }
  updateSliderPositionTechnology();
});

prevBtnTechnology.addEventListener('click', () => {
  if (currentIndexTechnology > 0) {
    currentIndexTechnology--;
  } else {
    currentIndexTechnology = totalSlidesTechnology - 1; // Переход на последний слайд
  }
  updateSliderPositionTechnology();
});