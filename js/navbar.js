var bigNav = document.querySelector('#big-nav');
var mobNav = document.querySelector('#mob-nav');
var mobNavOpener = document.querySelector('#mob-nav .opener');
var mobSheetWrapper = document.querySelector('#mob-nav .sheet-wrapper');
var prev = 0;

document.addEventListener('scroll', (event) => {
    if (prev > 0 && window.pageYOffset > 0) {
        return;
    } else if (window.pageYOffset === 0) {
        bigNav.classList.remove('white-nav');
        mobNav.classList.remove('white-nav');
    } else {
        bigNav.classList.add('white-nav');
        mobNav.classList.add('white-nav');
    }
    prev = window.pageYOffset;
});

mobNavOpener.addEventListener('click', (event) => {
    mobSheetWrapper.classList.toggle('hide');
});