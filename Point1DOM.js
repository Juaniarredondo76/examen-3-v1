const exambotton = document. querySelector ('#exambotton')
    if (exambotton){
        exambotton.addEventListener('click' ),function( evebnt){
            const placa = document.querySelector ('#placa')
            const pasajero = document.querySelector ('#pasajero')
            const ruta = document.querySelector ('#ruta')
            const total = document.querySelector('#total')
    
        if (placa && pasajero && ruta && total ){
            let placaValue = Number(placa.value) 
            let pasajeroValue = Number(pasajeros.value)
            let rutavalue =ruta.value
            var msg

            if (placaValue == '' || pasajeroValue == '' || rutavalue == '' ) {
                msg = 'por favor ingrese los datos'
            }else {
                let total = expone ( placaValue, pasajeroValue, rutavalue)
                msg = 'El vehiculo' + Placa +' traslado' + Pasajeros + 'y tiene un Total de' + Total
            }
            exambotton.textContent= "msg: " + msg
        }else{
            alert ('Error')
        }
    }
}