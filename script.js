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
    //   disableOnInteraction: true,
    // },
});

// AOS
AOS.init({
  offset: 300,
  duration: 1500,
})

// FORM PEDIDO DE ORAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  const formBtn = document.getElementById('form-btn')

  form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value

      if (name === '' || email === '' || message === '') {
          return
      }

      // Simulação de envio de e-mail
      console.log("Nome:", name)
      console.log("E-mail:", email)
      console.log("Mensagem:", message)
      
      form.reset()
      formBtn.classList.add('sent')
      formBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> - Enviado'

      setTimeout(() => {
          formBtn.classList.remove('sent')
          formBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> - Enviar'
      }, 5000)
  })
})
