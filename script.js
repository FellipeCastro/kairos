const menu = document.getElementById('menu')
const navbar = document.getElementById('navbar')

// Menu 
menu.onclick = () => {
  navbar.classList.toggle('open')

  if (navbar.classList.contains('open')) {
    menu.style.color = '#fff'
    menu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  } else {
    menu.style.color = '#0A1C69'
    menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
}

window.onscroll = () => {
  menu.style.color = '#0A1C69'
  menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
  navbar.classList.remove('open')
}

// Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
});

// AOS
AOS.init({
  offset: 300,
  duration: 1450,
});