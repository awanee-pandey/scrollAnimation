const container =document.querySelector('.container')
const close = document.getElementById('close');
const open = document.getElementById('open');

open.addEventListener('click',()=>{
    container.classList.add('show__nav');
    container.classList.add('.circle')
})

close.addEventListener('click',()=>{
    container.classList.remove('show__nav');

})