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

