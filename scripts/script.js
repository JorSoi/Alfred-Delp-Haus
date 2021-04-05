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

//Click Interactions mobile menu
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






// Animating slideshow
const imageContainer = document.getElementById('slideshow-image-container');
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');
let index = 0;

const slideRightAnimation = () => {
    index += 100;
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '20000');
    if (index > 500) {
        imageContainer.style.marginLeft = '0';
        index = 0;
    } else {
        imageContainer.style.marginLeft = `-${index}%`;
    }
    displaySlideShowCounter();
    
}

const slideLeftAnimation = () => {
    index -= 100;
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '20000');
    if (index < 0) {
        imageContainer.style.marginLeft = '-500%';
        index = 500; 
    } else {
        imageContainer.style.marginLeft = `-${index}%`;
    }
    displaySlideShowCounter();
    
}

buttonRight.addEventListener('click', slideRightAnimation);
buttonLeft.addEventListener('click', slideLeftAnimation);
var automove = setInterval(slideRightAnimation, '2000');




// Selecting Slideshow based on slideshow selector
const hausausstattung = document.getElementById('hausausstattung');
const selectorText1 = document.getElementById('selector-text-1');
const selectorUnderline1 = document.getElementById('selector-underline-1');
const slideShowHausausstattung = document.getElementById('slideshow-hausausstattung');

const stockwerksausstattung = document.getElementById('stockwerksausstattung');
const selectorText2 = document.getElementById('selector-text-2');
const selectorUnderline2 = document.getElementById('selector-underline-2');
const slideShowStockwerksausstattung = document.getElementById('slideshow-stockwerksausstattung');

const zimmerausstattung = document.getElementById('zimmerausstattung');
const selectorText3 = document.getElementById('selector-text-3');
const selectorUnderline3 = document.getElementById('selector-underline-3');
const slideShowZimmerausstattung = document.getElementById('slideshow-zimmerausstattung');


// Default selector state
selectorText1.style.color = '#070930';
selectorUnderline1.style.display = 'unset';
slideShowHausausstattung.style.display = 'flex';

const openSlideshow1 = () => {
    // General setting configs
    index = 0;
    displaySlideShowCounter();
    imageContainer.style.marginLeft = '0';
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '4000');

    

    // Slideshow 1 activated
    selectorText1.style.color = '#070930';
    selectorUnderline1.style.display = 'block'
    slideShowHausausstattung.style.display = 'flex';

    //Other slideshows deactivated
    selectorText2.style.color = '';
    selectorUnderline2.style.display = ''
    slideShowStockwerksausstattung.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = ''
    slideShowZimmerausstattung.style.display = '';
}

const openSlideshow2 = () => {
    // General setting configs
    index = 0;
    displaySlideShowCounter();
    imageContainer.style.marginLeft = '0';
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '4000');
    // Slideshow 1 activated
    selectorText2.style.color = '#070930';
    selectorUnderline2.style.display = 'block'
    slideShowStockwerksausstattung.style.display = 'flex';

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = ''
    slideShowHausausstattung.style.display = '';

    selectorText3.style.color = '';
    selectorUnderline3.style.display = ''
    slideShowZimmerausstattung.style.display = '';
}

const openSlideshow3 = () => {
    // General setting configs
    index = 0;
    displaySlideShowCounter();
    imageContainer.style.marginLeft = '0';
    clearInterval(automove);
    automove = setInterval(slideRightAnimation, '4000');

    // Slideshow 1 activated
    selectorText3.style.color = '#070930';
    selectorUnderline3.style.display = 'block'
    slideShowZimmerausstattung.style.display = 'flex';

    //Other slideshows deactivated
    selectorText1.style.color = '';
    selectorUnderline1.style.display = ''
    slideShowHausausstattung.style.display = '';

    selectorText2.style.color = '';
    selectorUnderline2.style.display = ''
    slideShowStockwerksausstattung.style.display = '';

}


hausausstattung.addEventListener('click', openSlideshow1);
stockwerksausstattung.addEventListener('click', openSlideshow2);
zimmerausstattung.addEventListener('click', openSlideshow3);




// Selecting Slideshow based on slideshow counter
const counter1 = document.getElementById('counter-1');
const counter2 = document.getElementById('counter-2');
const counter3 = document.getElementById('counter-3');
const counter4 = document.getElementById('counter-4');
const counter5 = document.getElementById('counter-5');
const counter6 = document.getElementById('counter-6');
counter1.style.backgroundColor = 'white';

const displaySlideShowCounter = () => {
    counter1.style.backgroundColor = 'white';
    switch (index) {
        case 0:
            counter1.style.backgroundColor = 'white';
            counter2.style.backgroundColor = '';
            counter3.style.backgroundColor = '';
            counter4.style.backgroundColor = '';
            counter5.style.backgroundColor = '';
            counter6.style.backgroundColor = '';
            break;
        case 100:
            counter1.style.backgroundColor = '';
            counter2.style.backgroundColor = 'white';
            counter3.style.backgroundColor = '';
            counter4.style.backgroundColor = '';
            counter5.style.backgroundColor = '';
            counter6.style.backgroundColor = '';
            break;        
        case 200:
            counter1.style.backgroundColor = '';
            counter2.style.backgroundColor = '';
            counter3.style.backgroundColor = 'white';
            counter4.style.backgroundColor = '';
            counter5.style.backgroundColor = '';
            counter6.style.backgroundColor = '';
            break;
        case 300:
            counter1.style.backgroundColor = '';
            counter2.style.backgroundColor = '';
            counter3.style.backgroundColor = '';
            counter4.style.backgroundColor = 'white';
            counter5.style.backgroundColor = '';
            counter6.style.backgroundColor = '';
            break;
        case 400:
            counter1.style.backgroundColor = '';
            counter2.style.backgroundColor = '';
            counter3.style.backgroundColor = '';
            counter4.style.backgroundColor = '';
            counter5.style.backgroundColor = 'white';
            counter6.style.backgroundColor = '';
            break;
        case 500:
            counter1.style.backgroundColor = '';
            counter2.style.backgroundColor = '';
            counter3.style.backgroundColor = '';
            counter4.style.backgroundColor = '';
            counter5.style.backgroundColor = '';
            counter6.style.backgroundColor = 'white';
            break;            
        default:
            break;
    }
}
