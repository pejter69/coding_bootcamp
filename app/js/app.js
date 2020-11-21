const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel")

next.addEventListener('click', function(){
    carousel.classList.toggle('cnext')
})
prev.addEventListener('click',function(){
    carousel.classList.toggle('cprev')
})