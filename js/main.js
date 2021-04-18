const buton = document.querySelector('.Header__button')
const menu = document.querySelector('.Header__navigation')

buton.addEventListener('click', () => {
   menu.classList.toggle('is_show')
})