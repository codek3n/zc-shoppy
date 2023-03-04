//navbar scroll animation effect

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})



// mobile navigation---------

let menuBar = document.getElementById('menu');
let closeButton = document.getElementById('close');
let navMobile = document.getElementById('navbarLeft');

if (menuBar) {
    menuBar.addEventListener('click', () => {
        navMobile.classList.add('open');
        navMobile.classList.remove('close');
        
    })
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        navMobile.classList.add('close');
        navMobile.classList.remove('open');
    })
}


//carousel


const carouselNext = document.querySelector('.btn-next');
const carouselPrev = document.querySelector('.btn-prev');
const carouselScrollTrack = document.querySelector('.carousel__container');
const carouselCard = document.querySelector('.carousel__card');

if (carouselNext) {
    const hScroll = carouselScrollTrack.offsetWidth;
    const stopHere = hScroll - carouselCard.offsetWidth;

    carouselNext.addEventListener('click', () => {
        carouselScrollTrack.scrollBy({
            // top: 0,
            left: stopHere,
            behavior:'smooth',
        })
    })
   
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            carouselScrollTrack.scrollBy({
                // top: 0,
                left: -stopHere,
                behavior:'smooth',
            })
        })
    }
}


