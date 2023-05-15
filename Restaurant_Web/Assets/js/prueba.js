document.getElementById("buscar").addEventListener('click',function(){
    if (navigator.geolocation) { //check if geolocation is available
        position = navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            console.log(latitud, longitud);
            var limit = 1;

            let apiKey = 'c6a7fe5bc4025f2fdfd88dfa3756ce76';

            /*const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitud}&lon=${longitud}&limit=1&appid=${apiKey}`;*/
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=jsonv2`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                if (data && data.address) {
                    const region = data.address.state || data.address.province || data.address.region;
                    console.log(`La región correspondiente a las coordenadas (${latitud}, ${longitud}) es: ${region}`);

                } else {
                    console.log('No se encontró una región para las coordenadas dadas.');
                }
                })
                .catch(error => {
                console.log('Error:', error);
            });
            
        });   
    }
})