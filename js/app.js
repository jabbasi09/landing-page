// global variables
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');
const cardSections = document.querySelectorAll('section');
const documentFrag = document.createDocumentFragment();
const navLi = document.querySelector('.navbar-menu ul li');

// making hamburger visible when clicking
navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active-ham');
});

// build an unordered list 
cardSections.forEach(section => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    li.classList.add('navbar__item');
    anchor.innerHTML = section.getAttribute('data-nav');
    anchor.classList.add('nav-links');
    // anchor.classList.add('active');
    anchor.classList.add(section.id);
    anchor.href = `#${section.id}`;
    li.appendChild(anchor);
    documentFrag.appendChild(li);
});

mainNav.appendChild(documentFrag);

// stick nav when scrolling
const mainHeader = document.querySelector('.navbar-menu');
let sticky = mainHeader.offsetTop;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        mainHeader.classList.add("sticky");
    }
    else {
        mainHeader.classList.remove("sticky");
    }
}

// active section when in section 
function activeSection(){
  for(let section of cardSections){ 
    const item = section.getBoundingClientRect();
    const activeElement = document.getElementById(section.id);
    if (item.y <= 90 && item.bottom >= 150){
      section.classList.add("active");
    }
    else {
      section.classList.remove("active");
    }
  }
}
document.addEventListener('scroll', activeSection);

// active nav when in section
function activeSection(){
  for(let section of cardSections){ 
    const item = section.getBoundingClientRect();
    const activeElement = document.getElementById(section.id);
    if (item.y <= 90 && item.bottom >= 150){
      section.classList.add("active");
    }
    else {
      section.classList.remove("active");
    }
  }
}
document.addEventListener('scroll', activeSection);

// function for smooth scroll
const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('.nav-links');

  for(let n in navLinks) {
    if(navLinks.hasOwnProperty(n)){
      navLinks[n].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  }
}
// function call for makeNavLinksSmooth
makeNavLinksSmooth();