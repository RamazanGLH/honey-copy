document.addEventListener('DOMContentLoaded', function(){
 
    const burgerIcon = document.querySelector('.header__burger-icon')
    const burgerIconMobile = document.querySelector('.burger__icon-mobile')
    const burger = document.querySelector('.burger')
    const wrapper = document.querySelector('.wrapper')


    burgerIcon.addEventListener('click', function () {
        wrapper.classList.add('none')
        burger.classList.remove('none')
    })

    burgerIconMobile.addEventListener('click', function () {
        wrapper.classList.remove('none')
        burger.classList.add('none')
    })


});