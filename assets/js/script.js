const body = document.querySelector('body')
const burgerBtn = document.querySelector('.js-burger-menu')
const nav = document.querySelector('.js-nav')

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('disable')
  nav.classList.toggle('active')
  burgerBtn.classList.toggle('active')
})