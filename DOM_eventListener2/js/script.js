const button = document.querySelector('.arrow')
const item1 = document.querySelector('.item1')
const imgArrow = document.querySelector('.fas')



function show(){
    item1.classList.toggle('show');

    if (item1.classList.contains('show')){
        imgArrow.style.rotate = '180deg';
        console.log('OK');
    }
    else{
        console.log('NIE OK');
        imgArrow.style.rotate = '0deg';
    }
    
}


button.addEventListener('click',show)

