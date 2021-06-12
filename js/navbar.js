var bigNav = document.querySelector('#big-nav');
var mobNav = document.querySelector('#mob-nav');
var mobNavOpener = document.querySelector('#mob-nav .nav-toggler');
var mobSheetWrapper = document.querySelector('#mob-nav .sheet-wrapper');
var mobNavOpen = false;

function setBigNavbarBG(scrollTop) {
    if (scrollTop === 0) {
        bigNav.classList.remove('white-nav');
    } else {
        bigNav.classList.add('white-nav');
    }
}

function setMobNavbarBG(scrollTop) {
    if (scrollTop !== 0 || mobNavOpen) {
        mobNav.classList.add('white-nav');
    } else {
        mobNav.classList.remove('white-nav');
    }
}


document.addEventListener('scroll', (event) => {
    setBigNavbarBG(window.pageYOffset);
    setMobNavbarBG(window.pageYOffset);
});

mobNavOpener.addEventListener('click', (event) => {
    mobNavOpen = !mobNavOpen;

    if (mobNavOpen) {
        mobNav.classList.add('white-nav');
        mobNav.classList.add('show-nav');

    } else {
        mobNav.classList.remove('show-nav');
        setMobNavbarBG(window.pageYOffset);
    }
});