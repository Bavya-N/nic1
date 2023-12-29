const btn=document.getElementsByClassName('btn1')[0];
const navbar=document.getElementsByClassName('navbar-links')[0];
btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});