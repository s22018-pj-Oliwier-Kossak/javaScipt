let redBtn1 = document.querySelector('#btn1')
let blueBtn2 = document.querySelector('.btn2')
let removeColor = document.querySelector('.remove-color')
let color = document.querySelector('.color')


function redColor(){
    color.classList.add('red')
    color.classList.remove('blue')
}

function blueColor(){
    color.classList.add('blue')
    color.classList.remove('red')
}
function deleteColor(){
    color.classList.remove('blue')
    color.classList.remove('red')
}

redBtn1.addEventListener('click',redColor)
blueBtn2.addEventListener('click',blueColor)
removeColor.addEventListener('click',deleteColor)