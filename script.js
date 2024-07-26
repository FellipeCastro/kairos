// MENU 
const menu = document.getElementById('menu')
const navbar = document.getElementById('navbar')

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

// SWIPER
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
})

// FORM PEDIDO DE ORAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  const formBtn = document.getElementById('form-btn')

  form.addEventListener('submit', (e) => {
      e.preventDefault()

      const nameContainer = document.getElementById('name-container')
      const emailContainer = document.getElementById('email-container')
      const messageContainer = document.getElementById('message-container')

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value

      nameContainer.classList.remove('erro')
      emailContainer.classList.remove('erro')
      messageContainer.classList.remove('erro')

      if (name === '') {
        nameContainer.classList.add('erro')
        return
      } else if (email === '') {
        emailContainer.classList.add('erro')
        return
      } else if (message === '') {
        messageContainer.classList.add('erro')
        return
      } else {
        form.reset()
        formBtn.classList.add('sent')
        formBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> - Enviado'
        formBtn.style.pointerEvents = 'none'

        setTimeout(() => {
            formBtn.classList.remove('sent')
            formBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> - Enviar'
            formBtn.style.pointerEvents = 'all'
        }, 5000)
      }
  })
})

// AOS
AOS.init({
  offset: 300,
  duration: 1500,
})
