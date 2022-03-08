const nav = document.querySelector('.nav')

nav.addEventListener('mouseenter', function (e) {
  nav.classList.add('open')
})

nav.addEventListener('mouseleave', function (e) {
  nav.classList.remove('open')
})
