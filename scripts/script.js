//Initializing "Animate on Scroll Library"
AOS.init();




// Opening and Closing mobile menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuCloser = document.getElementById('menu-closer');
const mobileOpened = document.getElementById('mobile-opened');

const opening = () =>{
    mobileOpened.style.display = 'block';
}

const closing = () => {
    mobileOpened.style.display = 'none';
}

hamburgerIcon.addEventListener('click', opening);
menuCloser.addEventListener('click', closing);





















// Trigger slideshow 1
const triggerSlideshow1 = () => {
    const img1 = document.getElementById('img1');
    const buttonLeft1 = document.querySelector('.nav-left-1');
    const buttonRight1 = document.querySelector('.nav-right-1');
    let multiplier1 = 0;
    clearInterval(automove);

    const slideRightAnimation = () => {
        multiplier1 += 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier1 > 500) {
            img1.style.marginLeft = '0';
            multiplier1 = 0;
        } else {
            img1.style.marginLeft = `-${multiplier1}%`;
        }
    }

    const slideLeftAnimation = () => {
        multiplier1 -= 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier1 < 0) {
            img1.style.marginLeft = '-500%';
            multiplier1 = 500; 
        } else {
        img1.style.marginLeft = `-${multiplier1}%`;
        }
    }

    buttonRight1.addEventListener('click', slideRightAnimation);
    buttonLeft1.addEventListener('click', slideLeftAnimation);
    var automove = setInterval(slideRightAnimation, '5000');
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '5000');

}






// Trigger slideshow 2
const triggerSlideshow2 = () => {
    const img7 = document.getElementById('img7');
    const buttonLeft2 = document.querySelector('.nav-left-2');
    const buttonRight2 = document.querySelector('.nav-right-2');
    let multiplier2 = 0;
    clearInterval(automove);

    const slideRightAnimation = () => {
        multiplier2 += 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier2 > 500) {
            img7.style.marginLeft = '0';
            multiplier2 = 0;
        } else {
            img7.style.marginLeft = `-${multiplier2}%`;
        }
    }

    const slideLeftAnimation = () => {
        multiplier2 -= 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier2 < 0) {
            img7.style.marginLeft = '-500%';
            multiplier2 = 500; 
        } else {
        img7.style.marginLeft = `-${multiplier2}%`;
        }
    }

    buttonRight2.addEventListener('click', slideRightAnimation);
    buttonLeft2.addEventListener('click', slideLeftAnimation);
    var automove = setInterval(slideRightAnimation, '5000');
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '5000');
}




// Trigger slideshow 3
const triggerSlideshow3 = () => {
    const img13 = document.getElementById('img13');
    const buttonLeft3 = document.querySelector('.nav-left-3');
    const buttonRight3 = document.querySelector('.nav-right-3');
    let multiplier3 = 0;
    clearInterval(automove);

    const slideRightAnimation = () => {
        multiplier3 += 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier3 > 500) {
            img13.style.marginLeft = '0';
            multiplier3 = 0;
        } else {
            img13.style.marginLeft = `-${multiplier3}%`;
        }
    }

    const slideLeftAnimation = () => {
        multiplier3 -= 100;
        clearInterval(automove);
        automove = setInterval(slideRightAnimation, '5000');
        if (multiplier3 < 0) {
            img13.style.marginLeft = '-500%';
            multiplier3 = 500; 
        } else {
        img13.style.marginLeft = `-${multiplier3}%`;
        }
    }

    buttonRight3.addEventListener('click', slideRightAnimation);
    buttonLeft3.addEventListener('click', slideLeftAnimation);
    var automove = setInterval(slideRightAnimation, '5000');
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '5000');
}






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
    triggerSlideshow1();
    selectorText1.style.color = '#070930';
    selectorUnderline1.style.display = 'block';
    slideshow1.style.display = 'flex';

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
    triggerSlideshow2();
    selectorText2.style.color = '#070930';
    selectorUnderline2.style.display = 'block';
    slideshow2.style.display = 'flex';

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
    triggerSlideshow3();
    selectorText3.style.color = '#070930';
    selectorUnderline3.style.display = 'block';
    slideshow3.style.display = 'flex';

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
slideshow1.style.display = 'flex';
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






























// page: bewerbung q&a accordeon
const text1 = document.getElementById('text-q1');
const text2 = document.getElementById('text-q2');
const text3 = document.getElementById('text-q3');
const text4 = document.getElementById('text-q4');
const text5 = document.getElementById('text-q5');

const question1 = document.querySelector('.question-1');
const question2 = document.querySelector('.question-2');
const question3 = document.querySelector('.question-3');
const question4 = document.querySelector('.question-4');
const question5 = document.querySelector('.question-5');

const arrowIcon1 = document.querySelector('.icon-1');
const arrowIcon2 = document.querySelector('.icon-2');
const arrowIcon3 = document.querySelector('.icon-3');
const arrowIcon4 = document.querySelector('.icon-4');
const arrowIcon5 = document.querySelector('.icon-5');


//Event Handlers for each Text field
const toggleText1 = () => {
    if(text1.style.display === 'none') {
    text1.style.display = 'block';
    arrowIcon1.style.transform = 'rotate(180deg)';
    text1.style.marginTop = '0';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    arrowIcon2.style.transform = '';
    arrowIcon3.style.transform = '';
    } else {
        text1.style.display = 'none';
        arrowIcon1.style.transform = '';
    }
};

const toggleText2 = () => {
    if(text2.style.display === 'none') {
    text2.style.cssText = 'display: block; margin-top: 0';
    arrowIcon2.style.transform = 'rotate(180deg)';
    text1.style.display = 'none';
    text3.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon3.style.transform = '';
    } else {
        text2.style.display = 'none';
        arrowIcon2.style.transform = '';
    }
};

const toggleText3 = () => {
    if(text3.style.display === 'none') {
    text3.style.display = 'block';
    arrowIcon3.style.transform = 'rotate(180deg)';
    text3.style.marginTop = '0';
    text1.style.display = 'none';
    text2.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    } else {
        text3.style.display = 'none';
        arrowIcon3.style.transform = '';
    }
};

const toggleText4 = () => {
    if(text4.style.display === 'none') {
    text4.style.display = 'block';
    arrowIcon4.style.transform = 'rotate(180deg)';
    text3.style.marginTop = '0';
    text1.style.display = 'none';
    text2.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    } else {
        text3.style.display = 'none';
        arrowIcon3.style.transform = '';
    }
};

const toggleText5 = () => {
    if(text3.style.display === 'none') {
    text3.style.display = 'block';
    arrowIcon3.style.transform = 'rotate(180deg)';
    text3.style.marginTop = '0';
    text1.style.display = 'none';
    text2.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    } else {
        text3.style.display = 'none';
        arrowIcon3.style.transform = '';
    }
};






question1.addEventListener('click', test);
question2.addEventListener('click', toggleText2);
question3.addEventListener('click', toggleText3);
question4.addEventListener('click', toggleText4);
question5.addEventListener('click', toggleText5);

const test = () => {
    alert('it works');
}