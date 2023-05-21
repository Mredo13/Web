const toggle = document.getElementById('modoOscuro');
var primaryColor = toggle.style.color;
var secondaryColor = "grey";
const body = document.querySelector('body');
const html = document.querySelector('html');
const titulo = document.getElementById('titulo');


toggle.addEventListener('click',function(){
    
    this.classList.toggle('bi-moon');
    this.classList.toggle('bi-brightness-high-fill');
    if(html.getAttribute("new-data-bs-theme")=="dark"){
        
        body.style.background ='white';
        html.setAttribute("new-data-bs-theme","light")
        body.style.color ='black';
        body.style.transition = '2s';
 
        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }else{

        body.style.background ='black';
        
        html.setAttribute("new-data-bs-theme","dark")
        body.style.color ='white';
        body.style.transition = '2s';

        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }  
})
/*
toggle.addEventListener('click',function(){
    
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='white';
        html.setAttribute("new-data-bs-theme","light")
        body.style.color ='black';
        body.style.transition = '2s';
 
        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }else{
        body.style.background ='black';
        
        html.setAttribute("new-data-bs-theme","dark")
        body.style.color ='white';
        body.style.transition = '2s';

        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }  
})*/
toggle.onmouseenter = function(e){
    toggle.style.color=secondaryColor;
    this.classList.toggle('bi-moon');
    toggle.style.transition="1s";
    this.classList.toggle('bi-brightness-high-fill');
}
toggle.onmouseleave = function(e){
    toggle.style.color=primaryColor;
    
    this.classList.toggle('bi-moon');
    toggle.style.transition="1s";
    this.classList.toggle('bi-brightness-high-fill');
}