let menu=document.querySelector('.menulist')
let menuicon=document.querySelector('.menu')
let nav=document.querySelector('.navbar')
let menuclose=document.querySelector('.menuclose')

menuicon.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

menuclose.addEventListener('click',()=>{
    nav.classList.toggle('active')
})