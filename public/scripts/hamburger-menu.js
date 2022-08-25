/***********************************************
*                   MENU BURGER                *
************************************************/

const el_Body = document.querySelector('body');

/**** MENU BURGER ****/
/* Bouton burger */
const el_BoutonBurger = document.querySelector('.burger-icon');
const el_BoutonArrow = document.querySelector('.arrow-icon');

const el_OverlayDiv = document.querySelector('.overlay');
const el_BurgerMenu = document.querySelector('.div-menu-burger');
             
/* Lors du click sur le menu burger */         
el_BoutonBurger.addEventListener('click', function(e){
  el_BurgerMenu.classList.remove('disabled');
  setTimeout(() => {
    el_OverlayDiv.classList.add('darken');
    el_Body.classList.add('overflow-stop');
    el_BurgerMenu.classList.add('apparation-burgerMenu');      
  }, 100);
});

/* Lors du click sur la flèche de retour */
el_BoutonArrow.addEventListener('click', function(e){
  el_BurgerMenu.classList.remove('apparation-burgerMenu');
  el_OverlayDiv.classList.remove('darken');
  setTimeout(() => {
    el_Body.classList.remove('overflow-stop');
    el_BurgerMenu.classList.add('disabled');
  }, 700);
});

/*Lors du click en dehors du menu burger quand celui-ci est activé */
el_OverlayDiv.addEventListener('click', function(e){
  el_BurgerMenu.classList.remove('apparation-burgerMenu');
    el_OverlayDiv.classList.remove('darken');
    el_Body.classList.remove('overflow-stop');
});

    