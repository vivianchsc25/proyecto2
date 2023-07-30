
const menuBtn = document.querySelector('#menu-btn')

console.log(menuBtn);
menuBtn.addEventListener('click',function() {
    document.body.classList.toggle('mobile-menu-active')
    
})