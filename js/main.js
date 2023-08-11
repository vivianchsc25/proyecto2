

//menu hamburguesa
const menuBtn = document.querySelector('#menu-btn')
// console.log(menuBtn);
menuBtn.addEventListener('click',function() {
    document.body.classList.toggle('mobile-menu-active')
    
})




//modo oscuro

const modoOscuro =document.querySelector('#modo-oscuro')
modoOscuro.addEventListener('click', function(){
    document.body.classList.toggle('modo-oscuro')
})