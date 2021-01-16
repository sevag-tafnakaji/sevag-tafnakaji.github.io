let overlay = document.getElementById("startScreen");

let delay = 2;

overlay.style.transition = `opacity ${delay}s`;
overlay.style.transitionTimingFunction = "ease-in-out";

overlay.onclick = function(){
    overlay.style.opacity = 0;
    setTimeout(function(){overlay.remove()}, delay*1000-300)
};