/* Abre e fecha o menu clicando nos icones*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar no icone fechar o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*MUDAR O HEADER DA PAGINA QUANDO DER SCROLL*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    // SCROLL É MAIOR QUE A ALTURA DO HEADER//
  } else {
    //MENOR QUE A ALTURA DO HEADER//
    header.classList.remove('scroll')
  }
})

//TESTIMONIALS SLIDER//
const swiper = new Swiper('.swiper-container', {
  slidesperview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//SCROLL REVIEW MOSTRAR ELEMENTOS NA ROLAGEM DA PAGINA//
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links, footer .brand, footer .social
  `,
  { interval: 100 }
)
