var dog = document.getElementById('dogPic')
var music = document.getElementById('ruffRyderAnthem')
var words = document.getElementById('dogText')

function ruff(){
    music.play()
    words.style.color = 'pink'
}

document.addEventListener('DOMContentLoaded', ()=> {
    dog.addEventListener('click', ruff)
})