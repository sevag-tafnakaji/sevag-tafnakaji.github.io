let overlay = document.getElementById("startScreen");
let overlayText = document.getElementById("startText");

let delay = 2;

overlay.style.transition = `opacity ${delay}s`;
overlay.style.transitionTimingFunction = "ease-in-out";

overlayText.style.transition = `opacity ${delay}s`;
overlayText.style.transitionTimingFunction = "ease-in-out";

document.getElementById("startText").style.opacity=1;
setTimeout(function(){}, delay*1000-300)

overlay.onclick = function(){
    overlay.style.opacity = 0;
    setTimeout(function(){overlay.remove()}, delay*1000-300)
};





