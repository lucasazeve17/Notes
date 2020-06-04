const menuHamburguer = document.querySelector('.menu-hamburguer')
const aside = document.querySelector('aside')


menuHamburguer.addEventListener('click',()=>{
    aside.classList.toggle('aside-animation')
    
})
