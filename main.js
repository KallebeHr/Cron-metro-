const minutosAll = document.querySelector('#minutos')
const segundosAll = document.querySelector('#segundos')
const milisegundosAll = document.querySelector('#milisegundos')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')
const ul = document.querySelector('ul')
const clearAll = document.querySelector('.x')

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;
const historico = []

startBtn.addEventListener('click', startTime)
pauseBtn.addEventListener('click', pauseTime)
resumeBtn.addEventListener('click', resumeTime)
resetBtn.addEventListener('click', resetTime)
clearAll.addEventListener('click', function(){
    
    if(confirm('Deseja apagar todo o historico?')){
        ul.innerHTML = ''
    }
    
     
})
function startTime() {
    interval = setInterval(() => {
        if (!isPaused) {
            milisegundos += 10;

            if (milisegundos === 1000) {
                segundos++;
                milisegundos = 0;
            }
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }

            minutosAll.textContent = formatTime(minutos);
            segundosAll.textContent = formatTime(segundos);
            milisegundosAll.textContent = milisegundos;
        }
    }, 10)
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
    resetBtn.style.display = 'block'

}
function pauseTime(){
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
    resetBtn.style.display = 'block'
}

function resumeTime(){
    isPaused = false
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

function resetTime(){
    isPaused = false;
    clearInterval(interval)
    function addHis(){
        const li = document.createElement('li')
        li.textContent = `${formatTime(minutos)}  :  ${formatTime(segundos)}  :   ${formatMilisegundos(milisegundos)}`
        ul.appendChild(li)
    }
   addHis()
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    minutosAll.textContent = '00'
    segundosAll.textContent = '00'
    milisegundosAll.textContent = '000'

    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'none'
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
function formatMilisegundos(time) {
    return time < 100 ? `0${time}`.padStart(3, '0') : time;
}

