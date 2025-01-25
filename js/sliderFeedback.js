const slidesFeedback = document.querySelector('.slidesFeedback');
const slideFeedback = document.querySelectorAll('.slideFeedback');
const prevBtnFeedback = document.getElementById('prevBtnFeedback');
const nextBtnFeedback = document.getElementById('nextBtnFeedback');

let currentIndexFeedback = 0;
const totalSlidesFeedback = slideFeedback.length;

function updateSliderPositionFeedback() {
  slidesFeedback.style.transform = `translateX(-${currentIndexFeedback * 100}%)`;
}

nextBtnFeedback.addEventListener('click', () => {
  if (currentIndexFeedback < totalSlidesFeedback - 1) {
    currentIndexFeedback++;
  } else {
    currentIndexFeedback = 0; // Возврат к первому слайду
  }
  updateSliderPositionFeedback();
});

prevBtnFeedback.addEventListener('click', () => {
  if (currentIndexFeedback > 0) {
    currentIndexFeedback--;
  } else {
    currentIndexFeedback = totalSlidesFeedback - 1; // Переход на последний слайд
  }
  updateSliderPositionFeedback();
});