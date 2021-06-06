var navbar = document.querySelector('#big-nav');
var prev = 0;
console.log(navbar)

document.addEventListener('scroll', (event) => {
    if (prev > 0 && window.pageYOffset > 0) {
        return;
    } else if (window.pageYOffset === 0) {
        navbar.classList.remove('white-nav');
    } else {
        navbar.classList.add('white-nav');
    }
    prev = window.pageYOffset;
});