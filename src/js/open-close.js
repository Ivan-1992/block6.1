//Показать всё/скрыть
const openBtn = document.querySelector('.button')
const sliderVisible = document.querySelector('.slider-1')

openBtn.addEventListener('click', function () {
  sliderVisible.classList.toggle('see')
  openBtn.classList.toggle('close')
  if (openBtn.classList.contains('close')) {
    openBtn.textContent = 'Скрыть'
  } else {
    openBtn.textContent = 'Показать все'
  }
})

const openThirdBtn = document.querySelector('.btn')
const sliderThirdVisible = document.querySelector('.slider-3')

openThirdBtn.addEventListener('click', function () {
  sliderThirdVisible.classList.toggle('see1')
  openThirdBtn.classList.toggle('close')
  if (openThirdBtn.classList.contains('close')) {
    openThirdBtn.textContent = 'Скрыть'
  } else {
    openThirdBtn.textContent = 'Показать все'
  }
})
