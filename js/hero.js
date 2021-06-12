var hero = document.querySelector('#hero');

// this is so that mobile users can see waves
// or else 100vh includes address bar height also
hero.style.minHeight = window.innerHeight + 'px';