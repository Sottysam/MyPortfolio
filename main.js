const openMenu = document.querySelector(".menu")
const closeMenu = document.querySelector(".close")
const nav = document.querySelector(".list")
const link1 = document.querySelector(".li")
const link2 = document.querySelector(".lin")
const link3 = document.querySelector(".linn")
const year = document.querySelector(".span")

openMenu.addEventListener("click",()=>{
  nav.style.right = "0"
})
closeMenu.addEventListener("click",()=>{
  nav.style.right = "-200px"
})
link1.addEventListener("click",()=>{
  nav.style.right = "-200px"
})
link2.addEventListener("click",()=>{
  nav.style.right = "-200px"
})
link3.addEventListener("click",()=>{
  nav.style.right = "-200px"
})

year.textContent = new Date().getFullYear()