const $tiempo=document.querySelector('.tiempo'),
$fecha=document.querySelector('.fecha');

function RelojDigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    anio= f.getFullYear(),
    diaSemana= f.getDay;

    let tiemString= f.toLocaleTimeString();
    $tiempo.ineerHTML=(semana[diaSemana])

    let semana= ['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    let showSemana= (semana[diaSemana]);
    $fecha.ineerHTML= '$(showSemana) $(dia)-$(mes)-$(anio)'
}
setInterval(()=>{
    RelojDigital()
},1000);