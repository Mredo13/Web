function validarNombres(tipo){
    let elemento = document.getElementById(tipo);   
    if (elemento.value.trim().length == 0){
        document.getElementById(`error_${tipo}_min`).style.display = "inline";
        document.getElementById(`error_${tipo}_max`).style.display = "none";
        elemento.classList.add("is-invalid");
    }
    else if(elemento.value.trim().length > 15){
        document.getElementById(`error_${tipo}_max`).style.display = "inline";
        document.getElementById(`error_${tipo}_min`).style.display = "none";
        elemento.classList.add("is-invalid");
    }
    else{
        document.getElementById(`error_${tipo}_min`).style.display = "none";
        document.getElementById(`error_${tipo}_max`).style.display = "none";
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
    }
}
function validarRut(){
    let rut = document.getElementById("rut");
    if (rut.value.trim().length == 0){
        document.getElementById("error_rut").style.display = "inline";
        rut.classList.add("is-invalid");
    }
    else{
        document.getElementById("error_rut").style.display = "none";
        rut.classList.remove("is-invalid");
        rut.classList.add("is-valid");
    }
}

function validarFormulario() {
    

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;   
    let fecha_nac = document.getElementById("fecha_nac").value;      

 


    //Validacion EMAIL
    let rgEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (rgEmail.test(email) == false){  
        document.getElementById("error_email").style.display = "inline";
        document.getElementById("email").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_email").style.display = "none";
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");

    }

    //Validación direccion
    if (direccion.trim().length == 0){
        document.getElementById("error_direccion_min").style.display = "inline";
        document.getElementById("error_direccion_max").style.display = "none";
        document.getElementById("direccion").classList.add("is-invalid");
    }
    else if(nombre.trim().length > 20){
        document.getElementById("error_direccion_max").style.display = "inline";
        document.getElementById("error_direccion_min").style.display = "none";
        document.getElementById("direccion").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_direccion_min").style.display = "none";
        document.getElementById("error_direccion_max").style.display = "none";
        document.getElementById("direccion").classList.remove("is-invalid");
        document.getElementById("direccion").classList.add("is-valid");
    }

    //Validación telefono
    if (telefono.trim().length == 0){
        document.getElementById("error_telefono").style.display = "inline";
        document.getElementById("telefono").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_telefono").style.display = "none";
        document.getElementById("telefono").classList.remove("is-invalid");
        document.getElementById("telefono").classList.add("is-valid");
    }

    //Validacion PASSWORD
    let rgPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;
    if(rgPass.test(password) == false){
        document.getElementById("error_password").style.display = "inline";
        document.getElementById("password").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_password").style.display = "none";
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
    }
}

function password(){
    let input = document.getElementById("password");

    if(input.type == "password"){
        input.type = "text";
        document.getElementById("mostrar_pass").style.display = "none";
        document.getElementById("ocultar_pass").style.display = "inline";
    }
    else{
        input.type = "password";
        document.getElementById("mostrar_pass").style.display = "inline";
        document.getElementById("ocultar_pass").style.display = "none";
    }   

}

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("paterno").value;
    var apellidoMaterno = document.getElementById("materno").value;
    var rut = document.getElementById("rut").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var comentarios = document.getElementById("Comentarios").value;
    var fechaNacimiento = document.getElementById("fecha_nac").value;
    var password = document.getElementById("password").value;
  
    // Mostrar la información en el elemento con el id "respuesta"
    var respuestaElemento = document.getElementById("respuesta");
    respuestaElemento.innerHTML = "Nombre: " + nombre + "<br>"
      + "Apellido Paterno: " + apellidoPaterno + "<br>"
      + "Apellido Materno: " + apellidoMaterno + "<br>"
      + "RUT: " + rut + "<br>"
      + "Email: " + email + "<br>"
      + "Dirección: " + direccion + "<br>"
      + "Teléfono: " + telefono + "<br>"
      + "Comentarios: " + comentarios + "<br>"
      + "Fecha de Nacimiento: " + fechaNacimiento + "<br>"
      + "Contraseña: " + password;
});