const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')


let fontSizeChange = 20

function bigText(){

    fontSizeChange = fontSizeChange + 10
    p.style.fontSize = `${fontSizeChange}px`
}

function smallText(){

    fontSizeChange = fontSizeChange - 10
    p.style.fontSize = `${fontSizeChange}px`
}

function changeColor(){
    p.style.color = 'gold'
}

sizeUp.addEventListener('click',bigText)
sizeDown.addEventListener('click',smallText)
color.addEventListener('click',changeColor)



