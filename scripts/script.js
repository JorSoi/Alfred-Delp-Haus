//Initializing "Animate on Scroll Library"
AOS.init();

// Initializing Swiper Library
const initializeSwiper1 = () => {
    var swiper1 = new Swiper('.slideshow-1', {
    spaceBetween: 10,
    speed: 500,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });
}

const initializeSwiper2 = () => {
    var swiper2 = new Swiper('.slideshow-2', {
    spaceBetween: 10,
    speed: 500,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });
}

var swiper3;
const initializeSwiper3 = () => {
    var swiper3 = new Swiper('.slideshow-3', {
    spaceBetween: 10,
    speed: 500,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });
}







// Navbar shadow on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("scroll-shadow").style.boxShadow = "0px 1px 11px #00000034";
  } else {
    document.getElementById("scroll-shadow").style.boxShadow = "none";
  }
}









// Opening and Closing mobile menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuCloser = document.getElementById('menu-closer');
const mobileOpened = document.getElementById('mobile-opened');
document.body.style.overflow = 'unset';


const opening = () =>{
    mobileOpened.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
}

const closing = () => {
    mobileOpened.style.display = 'none';
    document.body.style.overflow = 'unset';
}

hamburgerIcon.addEventListener('click', opening);
menuCloser.addEventListener('click', closing);






























































































































// Selecting Slideshow based on slideshow selector
const hausausstattung = document.getElementById('hausausstattung');
const selectorText1 = document.getElementById('selector-text-1');
const selectorUnderline1 = document.getElementById('selector-underline-1');
const slideshow1 = document.querySelector('.slideshow-1');

const stockwerksausstattung = document.getElementById('stockwerksausstattung');
const selectorText2 = document.getElementById('selector-text-2');
const selectorUnderline2 = document.getElementById('selector-underline-2');
const slideshow2 = document.querySelector('.slideshow-2');

const zimmerausstattung = document.getElementById('zimmerausstattung');
const selectorText3 = document.getElementById('selector-text-3');
const selectorUnderline3 = document.getElementById('selector-underline-3');
const slideshow3 = document.querySelector('.slideshow-3');


var initialization1 = (function() {
    var executed1 = false;
    return function() {
        if (!executed1) {
            executed1 = true;
            initializeSwiper1();
        }
    };
})();

var initialization2 = (function() {
    var executed2 = false;
    return function() {
        if (!executed2) {
            executed2 = true;
            initializeSwiper2();
        }
    };
})();

var initialization3 = (function() {
    var executed3 = false;
    return function() {
        if (!executed3) {
            executed3 = true;
            initializeSwiper3();
        }
    };
})();



// Trigger slideshow 1
const openSlideshow1 = () => {

    // Slideshow 1 activated
    selectorText1.style.color = '#070930';
    selectorUnderline1.style.display = 'block';
    slideshow1.style.display = 'block';
    
    //Other slideshows deactivated
    selectorText2.style.color = '';
    selectorUnderline2.style.display = '';
    slideshow2.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = '';
    slideshow3.style.display = '';
}



const openSlideshow2 = () => {

    // Slideshow 2 activated
    selectorText2.style.color = '#070930';
    selectorUnderline2.style.display = 'block';
    slideshow2.style.display = 'block';

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = '';
    slideshow1.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = '';
    slideshow3.style.display = '';
}

const openSlideshow3 = () => {

    // Slideshow 1 activated
    selectorText3.style.color = '#070930';
    selectorUnderline3.style.display = 'block';
    slideshow3.style.display = 'block';
    

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = '';
    slideshow1.style.display = '';

    selectorText2.style.color = '';
    selectorUnderline2.style.display = '';
    slideshow2.style.display = '';
}

hausausstattung.addEventListener('click', () => {openSlideshow1(); initialization1();});
stockwerksausstattung.addEventListener('click', () => {openSlideshow2(); initialization2();});
zimmerausstattung.addEventListener('click', () => {openSlideshow3(); initialization3();});


// By default slideshow 1 activated
openSlideshow1();
initialization1();





































// Testimonial section
const testimonialArrowLeft = document.getElementById('testimonial-arrow-left');
const testimonialArrowLeftMobile = document.getElementById('testimonial-arrow-left-mobile');

const testimonialArrowRight = document.getElementById('testimonial-arrow-right');
const testimonialArrowRightMobile = document.getElementById('testimonial-arrow-right-mobile');

const profile1 = document.getElementById('profile-1');
const testimonialText1 = document.getElementById('testimonial-text-1');
const testimonialNav1 = document.getElementById('testimonial-nav1');

const profile2 = document.getElementById('profile-2');
const testimonialText2 = document.getElementById('testimonial-text-2');
const testimonialNav2 = document.getElementById('testimonial-nav2');

const profile3 = document.getElementById('profile-3');
const testimonialText3 = document.getElementById('testimonial-text-3');
const testimonialNav3 = document.getElementById('testimonial-nav3');

const profile4 = document.getElementById('profile-4');
const testimonialText4 = document.getElementById('testimonial-text-4');
const testimonialNav4 = document.getElementById('testimonial-nav4');

const profile5 = document.getElementById('profile-5');
const testimonialText5 = document.getElementById('testimonial-text-5');
const testimonialNav5 = document.getElementById('testimonial-nav5');





// Default settings
let profileIndex = 0;
profile1.style.display = 'block';
testimonialNav1.style.backgroundColor = '#F1872D';
testimonialText1.style.display = 'block';


const selectProfile = () => {
    switch (profileIndex) {
        case 0:
            profile1.style.display = 'block';
            testimonialNav1.style.backgroundColor = '#F1872D';
            testimonialText1.style.display = 'block';
            profile2.style.display = '';
            testimonialNav2.style.backgroundColor = '';
            testimonialText2.style.display = '';
            profile3.style.display = '';
            testimonialNav3.style.backgroundColor = '';
            testimonialText3.style.display = '';
            profile4.style.display = '';
            testimonialNav4.style.backgroundColor = '';
            testimonialText4.style.display = '';
            profile5.style.display = '';
            testimonialNav5.style.backgroundColor = '';
            testimonialText5.style.display = '';
            break;

        case 1:
            profile1.style.display = '';
            testimonialNav1.style.backgroundColor = '';
            testimonialText1.style.display = '';
            profile2.style.display = 'block';
            testimonialNav2.style.backgroundColor = '#F1872D';
            testimonialText2.style.display = 'block';
            profile3.style.display = '';
            testimonialNav3.style.backgroundColor = '';
            testimonialText3.style.display = '';
            profile4.style.display = '';
            testimonialNav4.style.backgroundColor = '';
            testimonialText4.style.display = '';
            profile5.style.display = '';
            testimonialNav5.style.backgroundColor = '';
            testimonialText5.style.display = '';
            break;

        case 2:
            profile1.style.display = '';
            testimonialNav1.style.backgroundColor = '';
            testimonialText1.style.display = '';
            profile2.style.display = '';
            testimonialNav2.style.backgroundColor = '';
            testimonialText2.style.display = '';
            profile3.style.display = 'block';
            testimonialNav3.style.backgroundColor = '#F1872D';
            testimonialText3.style.display = 'block';
            profile4.style.display = '';
            testimonialNav4.style.backgroundColor = '';
            testimonialText4.style.display = '';
            profile5.style.display = '';
            testimonialNav5.style.backgroundColor = '';
            testimonialText5.style.display = '';
            break;

        case 3:
            profile1.style.display = '';
            testimonialNav1.style.backgroundColor = '';
            testimonialText1.style.display = '';
            profile2.style.display = '';
            testimonialNav2.style.backgroundColor = '';
            testimonialText2.style.display = '';
            profile3.style.display = '';
            testimonialNav3.style.backgroundColor = '';
            testimonialText3.style.display = '';
            profile4.style.display = 'block';
            testimonialNav4.style.backgroundColor = '#F1872D';
            testimonialText4.style.display = 'block';
            profile5.style.display = '';
            testimonialNav5.style.backgroundColor = '';
            testimonialText5.style.display = '';
            break;

        case 4:
            profile1.style.display = '';
            testimonialNav1.style.backgroundColor = '';
            testimonialText1.style.display = '';
            profile2.style.display = '';
            testimonialNav2.style.backgroundColor = '';
            testimonialText2.style.display = '';
            profile3.style.display = '';
            testimonialNav3.style.backgroundColor = '';
            testimonialText3.style.display = '';
            profile4.style.display = '';
            testimonialNav4.style.backgroundColor = '';
            testimonialText4.style.display = '';
            profile5.style.display = 'block';
            testimonialNav5.style.backgroundColor = '#F1872D';
            testimonialText5.style.display = 'block';
            break;

        default:
            break;
    }
}

const goRight = () => {
    profileIndex + 1;
    if (profileIndex > 3) {
        profileIndex = 0;
    } else {
        profileIndex += 1;
    }
    selectProfile();
}

const goLeft = () => {
    profileIndex - 1;
    if (profileIndex < 1) {
        profileIndex = 4;
    } else {
        profileIndex -= 1;
    }
    selectProfile();
}


testimonialArrowLeft.addEventListener('click', goLeft);
testimonialArrowLeftMobile.addEventListener('click', goLeft);

testimonialArrowRight.addEventListener('click', goRight);
testimonialArrowRightMobile.addEventListener('click', goRight);



const openTestimonial1 = () => {
    profileIndex = 0;
    selectProfile();
}

const openTestimonial2 = () => {
    profileIndex = 1;
    selectProfile();
}

const openTestimonial3 = () => {
    profileIndex = 2;
    selectProfile();
}

const openTestimonial4 = () => {
    profileIndex = 3;
    selectProfile();
}

const openTestimonial5 = () => {
    profileIndex = 4;
    selectProfile();
}

testimonialNav1.addEventListener('click', openTestimonial1);
testimonialNav2.addEventListener('click', openTestimonial2);
testimonialNav3.addEventListener('click', openTestimonial3);
testimonialNav4.addEventListener('click', openTestimonial4);
testimonialNav5.addEventListener('click', openTestimonial5);


























