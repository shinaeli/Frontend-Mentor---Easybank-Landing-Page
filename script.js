console.log('Hello!');

const linksContainerEl = document.querySelector('.links-container');
const burgerEl = document.querySelector('.burger');
const closeEl = document.querySelector('.close');

burgerEl.addEventListener('click', function() {
    linksContainerEl.style.display = 'block';
    closeEl.style.display = 'block';
    this.style.display = 'none';
})

closeEl.addEventListener('click', function() {
    linksContainerEl.style.display = 'none';
    burgerEl.style.display = 'block';
    this.style.display = 'none';
})