const toggle = document.getElementById('modoOscuro');
const body = document.querySelector('body');
const titulo = document.getElementById('titulo');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    /*this.classList.toggle('moon');*/
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='white';
        body.style.color ='black';
        body.style.transition = '2s';
        titulo.textContent ="Light mode";
    }else{
        body.style.background ='black';
        body.style.color ='white';
        body.style.transition = '2s';
        titulo.textContent ='Dark Mode';
    }  
})