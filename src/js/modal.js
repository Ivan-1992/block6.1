//Открытие и закрытие меню слева
const openLeftMenu = document.querySelector('.header__menu')
const leftMenu = document.querySelector('.left-menu')
const closeLeftMenu = document.querySelector('.header-left-menu__close')
const closeBack = document.querySelector('.close-back')
const activeBack = document.querySelector('.close-back-close')

openLeftMenu.addEventListener('click', function () {
  leftMenu.classList.add('left-menu-show')
  leftMenu.classList.remove('left-menu')
  closeBack.classList.add('active-back')
  closeBack.classList.remove('close-back')
})

closeLeftMenu.addEventListener('click', function () {
  leftMenu.classList.add('left-menu')
  leftMenu.classList.remove('left-menu-show')
  closeBack.classList.remove('active-back')
  closeBack.classList.add('close-back')
})

activeBack.addEventListener('click', function () {
  leftMenu.classList.add('left-menu')
  leftMenu.classList.remove('left-menu-show')
  closeBack.classList.remove('active-back')
  closeBack.classList.add('close-back')
})

//Открытие и закрытие модальных окон
//Модальное окно звонок
const phoneCall = document.querySelectorAll('.image__call')
const popupCall = document.querySelector('.popup-call')
const popupClose = document.querySelector('.close-popup')
const closeBackModal = document.querySelector('.close-back_modal')

for (let i = 0; i < phoneCall.length; i++) {
  phoneCall[i].addEventListener('click', function () {
    popupCall.classList.remove('popup-call_close')
    closeBackModal.classList.remove('close-back_modal')
    closeBackModal.classList.add('active-back_modal')
  })
}

popupClose.addEventListener('click', function () {
  popupCall.classList.add('popup-call_close')
  closeBackModal.classList.add('close-back_modal')
  closeBackModal.classList.remove('active-back_modal')
})

//Модальное окно feedback
const openChat = document.querySelectorAll('.image__chat')
const openFeed = document.querySelector('.popup-feedback')
const popupCloseFeed = document.querySelector('.popup-feedback__close')

for (let i = 0; i < openChat.length; i++) {
  openChat[i].addEventListener('click', function () {
    openFeed.classList.remove('popup-feedback_closing')
    closeBackModal.classList.remove('close-back_modal')
    closeBackModal.classList.add('active-back_modal')
  })
}

popupCloseFeed.addEventListener('click', function () {
  openFeed.classList.add('popup-feedback_closing')
  closeBackModal.classList.add('close-back_modal')
  closeBackModal.classList.remove('active-back_modal')
})
