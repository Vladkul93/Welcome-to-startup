new Swiper('.image-slider', {
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    slidesPerView: 4,
    // freeMode: true,
    spaceBetween: 30,
    loop:true,
    breakpoints: {
        250: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 1,
        },
        620: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView:4,
        }
    },
});


let social = document.querySelectorAll('.image-slider__image');

social.forEach(about=> {
    about.addEventListener('mouseover', function() {
        for(let a = 0; a < social.length; a++) {
            social[a].classList.remove('visibl');
        }
        about.classList.add('visibl');
    });
});


let arrow = document.querySelectorAll('.swip');

arrow.forEach(arr => {
    arr.addEventListener('click', function(){
        for(let b = 0; b < arrow.length; b++){
            arrow[b].classList.remove('r-active');
        }
        arr.classList.add('r-active');
    });
});;
// Catalog filter
const filterBox = document.querySelectorAll('.block');

document.querySelector('nav').addEventListener('click', event => {
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});

// Catalog filter UL
let filterUl = document.querySelectorAll('.catalog-li');

filterUl.forEach(item => {
    item.addEventListener('click', function(){
        for(let i = 0; i < filterUl.length; i++) {
            filterUl[i].classList.remove('red-active');
        }
        item.classList.add('red-active');
    });
});


// Catalog filter photo hover

let showHover = document.querySelectorAll('.block');

showHover.forEach(swelm =>{
    swelm.addEventListener('mouseover', function() {
        for(let s = 0; s< showHover.length; s++) {
            showHover[s].classList.remove('show');
        }
        swelm.classList.add('show');
    })
});
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var m;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (m = 0; m < slides.length; m++) {
        slides[m].style.display = "none";
    }
    for (m = 0; m < dots.length; m++) {
        dots[m].className = dots[m].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};
function openNav() {
    document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0%';
};
let popupBg = document.querySelector('.popup');
let popup = document.querySelector('.popup-menu');
let openPopupButton = document.querySelector('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 

openPopupButton.addEventListener('click',() => {
    popupBg.classList.add('is-active');
    popup.classList.add('is-active');
    document.body.classList.add('no-active');
})
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('is-active'); 
    popup.classList.remove('is-active'); 
    document.body.classList.remove('no-active');
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('is-active'); 
        popup.classList.remove('is-active');
        document.body.classList.remove('no-active');
    }
});;