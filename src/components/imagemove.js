const cat_img=document.querySelector('.catimg');
const play_btn=document.querySelector('.play');
let deg=0; 
play_btn.addEventListener('click',() => {
    deg=deg+360;
    cat_img.style.transition='all 5s';
    cat_img.style.transform='translate(50px,50px) ';
    cat_img.style.transform='initial';
    
    
}) 
    