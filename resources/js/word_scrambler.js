function play_round(){
        console.log(words.length)
        document.getElementById("gameButton").remove();
        var progress = document.createElement("progress");
        progress.max = delay;
        progress.value = 0;
        progress.id = "progressBar";
        parent = document.getElementsByClassName("centralArea")[0]
        parent.appendChild(progress);
        var rand_word = words[Math.floor(Math.random()*words.length)];
        var index_rand_word = words.indexOf(rand_word);
        if (index_rand_word > -1){
            words.splice(index_rand_word, 1)
        }
        shuffeled_rand_word = shuffelWord(rand_word);
        timeleft = delay -1;
        (function loop(){
            var timeout = setTimeout(function() {
               // Your logic here
                show_solution(shuffeled_rand_word)
                if(timeleft < 0){
                    clearTimeout(timeout);
                    restart_game(rand_word)
                }
                else{
                    document.getElementById("progressBar").value = delay - timeleft;
                    timeleft -= 1;
                    loop();
                }
                
           }, 1000);
        })();
    }

function shuffelWord(word) {
        return word.split('').sort(function(){return 0.5-Math.random()}).join('')    
    }

function show_solution(word){
    document.getElementById("text").innerText = word
}

function restart_game(solution){
    let bar = document.getElementsByTagName("progress")[0];
    bar.remove()
    let restartButton = document.createElement("button")
    restartButton.id = "gameButton";
    restartButton.textContent = "Restart Game?"
    restartButton.addEventListener("click", play_round, false);
    document.getElementById("text").innerText = "Game Over\n word was: "+ solution
    document.getElementsByClassName("centralArea")[0].appendChild(restartButton)
}

words = ["pepparkaka", "ost", "davar", "book", "matzun", "broke", "3araba", "tram", "3ard", "daraba", "pen", "man", "sambo"];
delay = 15
first = true
const button = document.getElementById("gameButton");
button.addEventListener("click", play_round, false);