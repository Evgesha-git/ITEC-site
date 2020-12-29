let queryMedia = window.matchMedia('')

let btn_nth = document.querySelector('.next')
let btn_prev = document.querySelector('.prev')
let delay = 4000
let delayWindow = parseFloat(window.getComputedStyle(document.body).transitionDuration) * 1000

let slides = document.querySelectorAll('.slide_element')
let opacityList = document.querySelectorAll('.opacity')
let width_prew = document.querySelector('.prev_slide').offsetWidth
let width_main = document.querySelector('.main_slide').offsetWidth
let width_wraper = document.querySelector('.slider_main').offsetWidth
let height_prev = document.querySelector('.prev_slide').offsetHeight
let mr_right = window.getComputedStyle(document.querySelector('.main_slide')).marginRight
let mr_left = window.getComputedStyle(document.querySelector('.main_slide')).marginLeft
let wraper = document.querySelector('.slider_main')
let slider = []

let sliders2 = document.querySelectorAll('.slide_element')
let parents2 = document.querySelectorAll('.opacity')

let intervalID = setInterval(nextSlide, delay)
let timer = setTimeout(()=>{},0)

for(let i = 0; i < slides.length; i++){
    slider[i] = slides[i].innerHTML
    slides[i].remove()
}

let step = 0
let offSet = 0

function draw(){
    let slide = document.createElement('div')
    slide.innerHTML = slider[step]
    if(step == 0){
        slide.classList.add('slide_element')
        slide.classList.add('prev_slide')
        slide.style.left = offSet * width_prew + 'px'
    }else if(step == 1){
        slide.classList.add('slide_element')
        slide.classList.add('main_slide')
        slide.style.left = offSet * width_prew + 'px'    
    }else if(step == 2){
        slide.classList.add('slide_element')
        slide.classList.add('next_slide')
        slide.style.left = width_prew + width_main + parseInt(mr_left) + 'px' 
    }else{
        slide.classList.add('slide_element')
        slide.style.left = width_wraper + width_prew + 'px' 
    }
    wraper.appendChild(slide)
    if(step + 1 == slider.length){
        step = 0
    }else{
        step++
    }
    offSet = 1 
}

let stepPrev = 0

function drawPrev(){
    if(step == 0){
        step = slider.length - 1
    }else{
        step--
    }
    let slide = document.createElement('div')
    slide.innerHTML = slider[step]
    slide.classList.add('slide_element')
    slide.style.left = 0 - width_prew - parseInt(mr_right) + 'px' 
    wraper.insertBefore(slide, wraper.firstChild)
    
    offSet = 1 
}

function nextSlide(){
    btn_nth.removeEventListener('click', nextSlide)
    let slides2 = document.querySelectorAll('.slide_element')
    let parents = document.querySelectorAll('.opacity')
    for(let i = 0; i < slides2.length; i++){
        if(i == 0){
            slides2[i].remove()
        }
        if(i == 1){
            slides2[i].classList.remove('prev_slide')
            slides2[i].style.left = 0 - width_prew - 43 + 'px'
        }else if(i == 2){
            slides2[i].classList.add('prev_slide')
            slides2[i].classList.remove('main_slide')            
            slides2[i].style.left = 0 + 'px'
            parents[i].style.opacity = 0
        }else if(i == 3){
            slides2[i].classList.remove('next_slide')
            slides2[i].classList.add('main_slide')
            parents[i].style.opacity = 1
            slides2[i].style.left = 1 * width_prew + 'px'   
        }else if(i == 4){
            slides2[i].classList.add('next_slide')
            parents[i].style.opacity = 0
            slides2[i].style.left = width_prew + width_main + parseInt(mr_left) + parseInt(mr_right) + 'px'
        }else{
            slides2[i].classList.remove('prev_slide')
            slides2[i].classList.remove('main_slide')
            slides2[i].classList.remove('next_slide')
            slides2[i].style.left = width_wraper + width_prew + parseInt(mr_left) + 'px'
        }
    }
    setTimeout(function(){
        slides2[0].remove()
        draw()
        styleClear()
        btn_nth.addEventListener('click', nextSlide)
    }, delayWindow)
}

function prevSlide(){
    btn_prev.removeEventListener('click', prevSlide)
    let slides2 = document.querySelectorAll('.slide_element')
    let parents = document.querySelectorAll('.opacity')
        for(let i = 0; i < slides2.length - 2; i++){
            if(i == 0){
                slides2[i].classList.add('prev_slide')
                slides2[i].style.left = 0 + 'px'
            }else if(i == 1){
                slides2[i].classList.remove('prev_slide')
                slides2[i].classList.add('main_slide')
                parents[i].style.opacity = 1
                slides2[i].style.left = 0 + width_prew + 'px'
            }else if(i == 2){
                slides2[i].classList.add('next_slide')
                slides2[i].classList.remove('main_slide')  
                parents[i].style.opacity = 0
                slides2[i].style.left = width_prew + width_main + parseInt(mr_left) + parseInt(mr_right) + 'px' 
            }else if(i == 3){
                slides2[i].classList.remove('next_slide')
                slides2[i].style.left = width_wraper + width_prew + parseInt(mr_left) + 'px'
            }else{
                slides2[i].classList.remove('prev_slide')
                slides2[i].classList.remove('main_slide')
                slides2[i].classList.remove('next_slide')
                slides2[i].style.left = width_wraper + width_prew + parseInt(mr_left) + 'px'
            }
        }
    setTimeout(function(){
        slides2[slides2.length-1].remove()
        drawPrev()
        styleClear()
        btn_prev.addEventListener('click', prevSlide)
    }, delayWindow)
}

function styleClear(){
    let slides3 = document.querySelectorAll('.slide_element')
    for(let i = 0; i<slides3.length;i++){
        if(i == slides3.length - 1){
            slides3[i].classList.remove('prev_slide')
            slides3[i].classList.remove('main_slide')
            slides3[i].classList.remove('next_slide')
            slides3[i].classList.remove('slide_none')
            slides3[i].style.left = width_wraper + width_prew + 'px'
        }
    }
}



for(let i = 0; i < sliders2.length; i++){
    if(sliders2[i].classList[1] == 'main_slide'){
        parents2[i].style.opacity = 1
    }
}

function resize() {
    width_wraper = document.querySelector('.slider_main').offsetWidth
    width_prew = document.querySelector('.prev_slide').offsetWidth
    let prew = document.querySelector('.prev_slide')
    width_main = document.querySelector('.main_slide').offsetWidth
    let main = document.querySelector('.main_slide')
    let next = document.querySelector('.next_slide')
    mr_right = window.getComputedStyle(document.querySelector('.main_slide')).marginRight
    mr_left = window.getComputedStyle(document.querySelector('.main_slide')).marginLeft
    let slide = document.querySelectorAll('.slide_element')
    prew.classList.left = 0 + 'px'
    main.style.left = 0 + width_prew + 'px'
    next.style.left = width_prew + width_main + parseInt(mr_left) + parseInt(mr_right) + 'px'
    slide[0].style.left = - (width_prew + parseInt(mr_left)) + 'px'
    for(let i = 4; i < slide.length; i++){
        slide[i].style.left = width_wraper + width_prew + parseInt(mr_left) + 'px'
    }
}

function interval(target){
    let btn = target.currentTarget
    clearInterval(intervalID)
    intervalID = setInterval(nextSlide, delay)
    btn.removeEventListener('mouseout', interval)
    btn.addEventListener('moeseover', removeInterval)
}

function removeInterval(target){
    let btn = target.currentTarget
    clearInterval(intervalID)
    btn.removeEventListener('moeseover', removeInterval)
    btn.addEventListener('mouseout', interval)
}

window.addEventListener('resize', ()=>{
    if(queryMedia.matches){
        clearTimeout(timer)
        clearInterval(intervalID)
        timer = setTimeout(()=>{
            resize()
            intervalID = setInterval(nextSlide, delay)
        }, delayWindow)
        // window.requestAnimationFrame(resize)
    }
})

for(let i = 0; i < slides.length; i++){
    draw()
}

prevSlide()

btn_nth.addEventListener('mouseout', interval)
btn_prev.addEventListener('mouseout', interval)
btn_nth.addEventListener('mouseover', removeInterval)
btn_prev.addEventListener('mouseover', removeInterval)
btn_nth.addEventListener('click', nextSlide)
btn_prev.addEventListener('click', prevSlide)