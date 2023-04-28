const toggle = document.getElementById('modoOscuro');
var primaryColor = toggle.style.color;
var secondaryColor = "grey";
const body = document.querySelector('body');
const html = document.querySelector('html');
const titulo = document.getElementById('titulo');
/*
toggle.addEventListener('click',function(){
    if(html.getAttribute("new-data-bs-theme")=="dark"){
        this.classList.toggle('bi-brightness-high-fill');
        body.style.background ='white';
        html.setAttribute("new-data-bs-theme","light")
        body.style.color ='black';
        body.style.transition = '2s';
 
        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }else{
        this.classList.toggle('bi-moon');
        body.style.background ='black';
        
        html.setAttribute("new-data-bs-theme","dark")
        body.style.color ='white';
        body.style.transition = '2s';

        var contenedor = primaryColor;
        primaryColor= secondaryColor;
        secondaryColor= contenedor;
    }  
})*///no funciona el classList.toggle(bi-brigh...)
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
})
toggle.onmouseenter = function(e){
    toggle.style.color=secondaryColor;
    toggle.style.transition="1s";
    //this.classList.toggle('bi-moon');
    
}
toggle.onmouseleave = function(e){
    toggle.style.color=primaryColor;
    //this.classList.toggle('bi-brightness-high-fill');
}