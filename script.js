const menuHamburguer = document.querySelector('span');
const navescondida = document.querySelector('.nav-menu-hamburguer');
const showUp = function(){
   navescondida.classList.toggle('.navaparece');
}
menuHamburguer.onclick = showUp;