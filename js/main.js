const buton = document.querySelector('.Header__button')
const menu = document.querySelector('.Header__navigation')

buton.addEventListener('click', () => {
   menu.classList.toggle('is_show')
})

$(document).ready(function(){
   $('.Women__slider').slick({
      arrows:false,
      slidesToShow: 4,
      autoplay:true,
      slidesToScroll: 1,
      responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2
           }
         }
      ]
   })
})