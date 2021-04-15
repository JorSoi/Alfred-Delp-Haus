//Initializing "Animate on Scroll Library"
AOS.init();

// Initializing Swiper Library
const initializeSwiper = () => {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        speed: 500,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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







// Trigger slideshow 1
const openSlideshow1 = () => {

    // Slideshow 1 activated
    selectorText1.style.color = '#070930';
    selectorUnderline1.style.display = 'block';
    slideshow1.style.display = 'block';
    initializeSwiper();

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
    initializeSwiper();

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
    initializeSwiper();

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = '';
    slideshow1.style.display = '';

    selectorText2.style.color = '';
    selectorUnderline2.style.display = '';
    slideshow2.style.display = '';
}

hausausstattung.addEventListener('click', openSlideshow1);
stockwerksausstattung.addEventListener('click', openSlideshow2);
zimmerausstattung.addEventListener('click', openSlideshow3);


// By default slideshow 1 activated
openSlideshow1();
// Default selector state
selectorText1.style.color = '#070930';
selectorUnderline1.style.display = 'unset';




































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
            break;

        default:
            break;
    }
}

const goRight = () => {
    profileIndex + 1;
    if (profileIndex > 1) {
        profileIndex = 0;
    } else {
        profileIndex += 1;
    }
    selectProfile();
}

const goLeft = () => {
    profileIndex - 1;
    if (profileIndex < 1) {
        profileIndex = 2;
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

testimonialNav1.addEventListener('click', openTestimonial1);
testimonialNav2.addEventListener('click', openTestimonial2);
testimonialNav3.addEventListener('click', openTestimonial3);


























