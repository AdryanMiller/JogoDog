const dog = document.querySelector('.dog');
const pipe = document.querySelector('.pipe');

const jump = () => {

    dog.classList.add('jump')
    setTimeout(() => {

        dog.classList.remove('jump')
    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const dogPosition = +window.getComputedStyle(dog).bottom.replace('px','');
    if (pipePosition <= 120 && pipePosition > 0  &&  dogPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        dog.style.animation = 'none'
        dog.style.bottom = `${dogPosition}px`;

        dog.src = 'img/Meu projeto.png'
        dog.style.width ='75px'
        dog.style.marginLeft ='50px'
        nuvens.style.animation = 'none'

    }

},10)


document.addEventListener('keydown', jump);