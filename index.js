const menuIcon = document.querySelector('.menu-icon')
const navHeader = document.querySelector('.nav-header')
const closeIcon = document.querySelector('.close-icon')
const allNav = document.querySelectorAll('.nav-header li a')

menuIcon.addEventListener('click', ()=>{
  navHeader.style.display = 'flex'
})

closeIcon.addEventListener('click', ()=>{
  navHeader.style.display = 'none'
})

allNav.forEach(element => element.addEventListener('click', ()=> {
  navHeader.style.display = 'none'
}))