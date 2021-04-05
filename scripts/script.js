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

hamburgerIcon.addEventListener('click', opening)
menuCloser.addEventListener('click', closing);




//Click Interactions mobile menu open
const menuTextDrop1 = document.querySelectorAll('.menu-text-drop-1');
const menuTextDrop2 = document.querySelectorAll('.menu-text-drop-2');
const menuTextDrop3 = document.querySelectorAll('.menu-text-drop-3');
const menuTextDrop4 = document.querySelectorAll('.menu-text-drop-4');
const menuTextDrop5 = document.querySelectorAll('.menu-text-drop-5');
const menuTextDrop6 = document.querySelectorAll('.menu-text-drop-6');
const link1 = document.querySelector('.link-1');
const link2 = document.querySelector('.link-2');
const link3 = document.querySelector('.link-3');
const link4 = document.querySelector('.link-4');
const link5 = document.querySelector('.link-5');
const link6 = document.querySelector('.link-6');

const click2 = () => {
    menuTextDrop2[0].style.display = 'block';
    menuTextDrop2[1].style.display = 'block';
    link2.style.color = '#F14014';
    
    menuTextDrop1[0].style.display = 'none';
    menuTextDrop1[1].style.display = 'none';
    link1.style.color = '#070930';
}

link2.addEventListener('click', click2);

const click3 = () => {
    menuTextDrop3[0].style.display = 'block';
    menuTextDrop3[1].style.display = 'block';
    link3.style.color = '#F14014';
    
    menuTextDrop1[0].style.display = 'none';
    menuTextDrop1[1].style.display = 'none';
    link1.style.color = '#070930';
}

link3.addEventListener('click', click3);

const click4 = () => {
    menuTextDrop4[0].style.display = 'block';
    menuTextDrop4[1].style.display = 'block';
    link4.style.color = '#F14014';
    
    menuTextDrop1[0].style.display = 'none';
    menuTextDrop1[1].style.display = 'none';
    link1.style.color = '#070930';
}

link4.addEventListener('click', click4);

const click5 = () => {
    menuTextDrop5[0].style.display = 'block';
    menuTextDrop5[1].style.display = 'block';
    link5.style.color = '#F14014';
    menuTextDrop1[0].style.display = 'none';
    menuTextDrop1[1].style.display = 'none';
    link1.style.color = '#070930';
}

link5.addEventListener('click', click5);

const click6 = () => {
    menuTextDrop6[0].style.display = 'block';
    menuTextDrop6[1].style.display = 'block';
    link6.style.color = '#F14014';
    menuTextDrop1[0].style.display = 'none';
    menuTextDrop1[1].style.display = 'none';
    link1.style.color = '#070930';
}

link6.addEventListener('click', click6);











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
    selectorUnderline1.style.display = 'block'
    slideshow1.style.display = 'flex';

    //Other slideshows deactivated
    selectorText2.style.color = '';
    selectorUnderline2.style.display = ''
    slideshow2.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = ''
    slideshow3.style.display = '';
}



const openSlideshow2 = () => {

    // Slideshow 2 activated
    triggerSlideshow2();
    selectorText2.style.color = '#070930';
    selectorUnderline2.style.display = 'block'
    slideshow2.style.display = 'flex';

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = ''
    slideshow1.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = ''
    slideshow3.style.display = '';
}

const openSlideshow3 = () => {

    // Slideshow 1 activated
    triggerSlideshow3();
    selectorText3.style.color = '#070930';
    selectorUnderline3.style.display = 'block'
    slideshow3.style.display = 'flex';

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = ''
    slideshow1.style.display = '';

    selectorText2.style.color = '';
    selectorUnderline2.style.display = ''
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




































































// Alert tester

const test = () => {
    alert('test works');
}