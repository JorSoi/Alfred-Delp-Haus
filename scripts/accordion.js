//Initializing "Animate on Scroll Library"
AOS.init();



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

const arrowIcon1 = document.querySelector('.question-icon-1');
const arrowIcon2 = document.querySelector('.question-icon-2');
const arrowIcon3 = document.querySelector('.question-icon-3');
const arrowIcon4 = document.querySelector('.question-icon-4');
const arrowIcon5 = document.querySelector('.question-icon-5');


// Default display state
text1.style.display = 'none';
text2.style.display = 'none';
text3.style.display = 'none';
text4.style.display = 'none';
text5.style.display = 'none';


//Event Handlers for each Text field
const toggleText1 = () => {
    if(text1.style.display === 'none') {
    text1.style.display = 'block';
    arrowIcon1.style.transform = 'rotate(180deg)';

    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    arrowIcon2.style.transform = '';
    arrowIcon3.style.transform = '';
    arrowIcon4.style.transform = '';
    arrowIcon5.style.transform = '';

    } else if(text1.style.display = 'block'){
        text1.style.display = 'none';
        arrowIcon1.style.transform = '';
    } else {}
};

const toggleText2 = () => {
    if(text2.style.display === 'none') {
    text2.style.display = 'block';
    arrowIcon2.style.transform = 'rotate(180deg)';

    text1.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon3.style.transform = '';
    arrowIcon4.style.transform = '';
    arrowIcon5.style.transform = '';

    } else {
        text2.style.display = 'none';
        arrowIcon2.style.transform = '';
    }
};

const toggleText3 = () => {
    if(text3.style.display === 'none') {
    text3.style.display = 'block';
    arrowIcon3.style.transform = 'rotate(180deg)';

    text1.style.display = 'none';
    text2.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    arrowIcon4.style.transform = '';
    arrowIcon5.style.transform = '';


    } else {
        text3.style.display = 'none';
        arrowIcon3.style.transform = '';
    }
};

const toggleText4 = () => {
    if(text4.style.display === 'none') {
    text4.style.display = 'block';
    arrowIcon4.style.transform = 'rotate(180deg)';

    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text5.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    arrowIcon3.style.transform = '';
    arrowIcon5.style.transform = '';


    } else {
        text4.style.display = 'none';
        arrowIcon4.style.transform = '';
    }
};

const toggleText5 = () => {
    if(text5.style.display === 'none') {
    text5.style.display = 'block';
    arrowIcon5.style.transform = 'rotate(180deg)';

    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    arrowIcon1.style.transform = '';
    arrowIcon2.style.transform = '';
    arrowIcon3.style.transform = '';
    arrowIcon4.style.transform = '';


    } else {
        text5.style.display = 'none';
        arrowIcon5.style.transform = '';
    }
};






question1.addEventListener('click', toggleText1);
question2.addEventListener('click', toggleText2);
question3.addEventListener('click', toggleText3);
question4.addEventListener('click', toggleText4);
question5.addEventListener('click', toggleText5);