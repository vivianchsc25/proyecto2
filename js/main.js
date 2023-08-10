

//menu hamburguesa
const menuBtn = document.querySelector('#menu-btn')
// console.log(menuBtn);
menuBtn.addEventListener('click',function() {
    document.body.classList.toggle('mobile-menu-active')
    
})


// hoover

const menuItems = document.querySelectorAll ('.menu-item')

menuItems.forEach (function(item) {
    item.addEventListener('click', function(e){
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
    
});

const modoOscuro =document.querySelector('#modo-oscuro')
modoOscuro.addEventListener('click', function(){
    document.body.classList.toggle('modo-oscuro')
})