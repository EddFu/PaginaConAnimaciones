//vars

const modal = document.querySelector('.modal')
const cards = document.querySelector('.cards')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const slider = document.querySelector('.modal__content--slider')
const slider2 = document.querySelector('.modal__content--slider2')
const slider3 = document.querySelector('.modal__content--slider3')

const closeButton = document.querySelector('.modal__content--close')


button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
    slider.style.display = "block";
    slider2.style.display = "none";
    slider3.style.display = "none";
});
button2.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
    slider.style.display = "none";
    slider2.style.display = "block";
    slider3.style.display = "none";
});
button3.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
    slider.style.display = "none";
    slider2.style.display = "none";
    slider3.style.display = "block";
});


closeButton.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})