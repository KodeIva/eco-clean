let openBtn = document.querySelector('.bars')
let closeBtn = document.querySelector('.fa-times')
let menu = document.querySelector('.menu')


openBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})