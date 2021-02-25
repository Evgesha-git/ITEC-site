let btn = document.querySelector('.ham')
let nav = document.querySelector('nav')
let img_min = document.querySelector('.logo_min')
let dropdown = document.querySelector('.dropdown')
let menu = document.querySelector('.cors_tupe_only_sj')

btn.addEventListener('click', ()=>{
    if(btn.getAttribute('class', 'active') && btn.classList.contains('nav_open') == false){
        nav.setAttribute('class', 'nav_active')
        btn.classList.toggle('nav_open')
        img_min.classList.toggle('visible')
    }else{
        nav.removeAttribute('class')
        btn.classList.remove('nav_open')
        img_min.classList.remove('visible')
    }
})

dropdown.addEventListener('click', ()=>{
    if(menu.classList.contains('cour_type_active') == false){
        menu.classList.toggle('cour_type_active')
        menu.classList.remove('cour_type')
    }else{
        menu.classList.remove('cour_type_active')
        menu.classList.toggle('cour_type')
    }
})