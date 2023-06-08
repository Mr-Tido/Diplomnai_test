// //Slider
// const slider = document.querySelector('.slider');
// const sliderImages = document.querySelectorAll('.slider_img');
// const sliderLine = document.querySelector('.slider_line');

// const sliderBtnNext = document.querySelector('.next');
// const sliderBtnPrev = document.querySelector('.prev');


// let sliderCount  = 0; 
// let sliderWidth = slider.offsetWidth;

// function nextSlide(){
//   sliderCount++;

//   if(sliderCount >= sliderImages.length){
//       sliderCount = 0
//   }

//   rollSilder();
// }

// function prevSlide(){
//   sliderCount--;

//   if(sliderCount < 0){
//       sliderCount = sliderImages.length-1;
//   }

//   rollSilder();
// }

// function rollSilder(){
//   sliderLine.style.transform = `translateX(${-sliderCount*sliderWidth}px)`;
// }


//Наши Плюсы
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
document.addEventListener('DOMContentLoaded', () => {

    const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы
  
    const cards = document.querySelectorAll('.card') // получаем все карточки
  
    cards.forEach(card => { // для каждой карточки
      card.addEventListener('mouseenter', () => { // при наведении на карточку
        siblings(card).forEach(el => { // для каждого соседнего элемента
          el.classList.add('card_sibling') // добавляем активный класс, который визуально ставит соседние карточки на задний план
        })
      })
      card.addEventListener('mouseleave', () => { // если убираем курсор с карточки
        siblings(card).forEach(el => { // для каждого соседнего элемента
          el.classList.remove('card_sibling') // удаляем активный класс
        })
      })
    })
  
  })
// Модальное окно

// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("pasword").addEventListener("click", function() {
  document.getElementById("my-modal1").classList.add("open")
})

document.getElementById("pasword").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
  document.getElementById("my-modal1").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal1").classList.remove("open")
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal1 .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal1").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// Войти

// слайдер2

// Исходные данные по слайдеру (const)
const
    sliderLine = document.querySelector('.slider__line2'),
    sliderDots = document.querySelectorAll('.slider__dot');
        
// Переменные    
let sliderCount = 0,
    sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider2').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})











const sliderContainer = document.querySelector('.slider-container2');
const slider = document.querySelector('.slider2');
const slides = document.querySelectorAll('.slide2');

// Устанавливаем начальный индекс слайда
let currentIndex = 0;

// Функция для прокрутки слайдов
function scrollToSlide(index) {
  if (index < 0 || index >= slides.length) return; // Проверка на допустимый индекс

  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

// Обработчики событий для кнопок прокрутки слайдов
document.getElementById('prevBtn').addEventListener('click', () => {
  scrollToSlide(currentIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  scrollToSlide(currentIndex + 1);
});