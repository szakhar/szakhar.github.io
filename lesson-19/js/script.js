
// Відкриття Popup Hire
const hireButton = document.querySelector('.header__btn-hire-me');
hireButton.addEventListener('click', () => {
  const popupHire = document.querySelector('.hire-popup');
  // popupHire.style.display = "block";
  popupHire.style.visibility = "visible";
  popupHire.style.opacity = "1";
});

// Відкриття Popup Hire Footer
const hireButtonFooter = document.querySelector('.footer__btn-hire-me');
hireButtonFooter.addEventListener('click', () => {
  const popupHire = document.querySelector('.hire-popup');
  // popupHire.style.display = "block";
  popupHire.style.visibility = "visible";
  popupHire.style.opacity = "1";
});

// Закриття Popup Hire
const closeHire = document.querySelector('.hire-popup__close');
closeHire.addEventListener('click', () => {
  const popupHire = document.querySelector('.hire-popup'); 
  // popupHire.style.display = "none";
  popupHire.style.visibility = "hidden";
  popupHire.style.opacity = "0";
});


// Відкриття Меню
const navButton = document.querySelector('.header__nav-box');
navButton.addEventListener('click', () => {
  const popupNav = document.querySelector('.nav-popup'); 
  // popupNav.style.display = "block";
  popupNav.style.visibility = "visible";
  popupNav.style.opacity = "1";
});

// Закриття Меню
const closeNav = document.querySelector('.nav-popup__close');
closeNav.addEventListener('click', () => {
  const popupNav = document.querySelector('.nav-popup'); 
  // popupNav.style.display = "none";
  popupNav.style.visibility = "hidden";
  popupNav.style.opacity = "0";
});



// Закриття Cookies
const btnAccept = document.querySelector('.top-line__btn-accept');
btnAccept.addEventListener('click', () => {
  const topLine = document.querySelector('.top-line'); 
  topLine.style.display = "none";
  setTimeout(() => topLine.style.display = "flex", 2500);

});



function closePopup() {
  const navPopup = document.querySelector('.nav-popup'); 
  navPopup.style.visibility = "hidden";
  navPopup.style.opacity = "0";
  navPopup.style.transition = "all .2s ease-out";
}

// const navAbout = document.querySelector('.nav-about');
// navAbout.addEventListener('click', () => {

//   const navPopup = document.querySelector('.nav-popup'); 
//   navPopup.style.visibility = "hidden";
//   navPopup.style.opacity = "0";
  
//   // closeHire.array.forEach(element => {
      
//   // });
//   // console.log(closeMenuLink);

// });

const navAbout = document.querySelector('.nav-about');
navAbout.addEventListener('click', closePopup);

const navExpert = document.querySelector('.nav-expert');
navExpert.addEventListener('click', closePopup);

const navWorks = document.querySelector('.nav-works');
navWorks.addEventListener('click', closePopup);

const navFooter = document.querySelector('.nav-footer');
navFooter.addEventListener('click', closePopup);