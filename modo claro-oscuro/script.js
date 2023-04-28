const toggle = document.getElementById('modoOscuro');
var primaryColor = toggle.style.color;
var secondaryColor = "grey";
const body = document.querySelector('body');
const titulo = document.getElementById('titulo');


toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='white';
        body.style.color ='black';
        body.style.transition = '2s';
        titulo.textContent ="Light mode";
        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }else{
        body.style.background ='black';
        body.style.color ='white';
        body.style.transition = '2s';
        titulo.textContent ='Dark Mode';
        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }  
})
toggle.onmouseenter = function(e){
    toggle.style.color=secondaryColor;
    toggle.style.transition="1s";
}
toggle.onmouseleave = function(e){
    toggle.style.color=primaryColor;
}