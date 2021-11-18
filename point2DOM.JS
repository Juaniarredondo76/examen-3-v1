const exam2botton = document. querySelector ('#exam2botton')
    if (exam2botton){
        exam2botton.addEventListener('click' ),function( evebnt){
            const nombredetrabajadores = document.querySelector ('#nombredetrabajadores')
            const horas = document.querySelector ('#horas')
            const salario = document.querySelector ('#salario')
            const deducciones = document.querySelector ('#deducciones')
            const bonificaciones = document.querySelector ('#bonificaciones')
            const total = document.querySelector('#total')
    
        if (nombredetrabajadores &&horas && deducciones && bonificaciones && total ){
            let placaValue = Number(nombredetrabajadores.value) 
            lethorasValue = Number(pasajeros.value)
            let deduccionesvalue = Number (deducciones.value)
            let bonifiacionesvalue = Number (bonificaciones.value)
            let totalvalue = Number ( total.value)
            var msg

            if (placaValue == '' ||horasValue == '' || deduccionesvalue == '' ) {
                msg = 'por favor ingrese los datos'
            }else {
                let total = expone ( placaValue,horasValue, deduccionesvalue)
                msg = 'El vehiculo' + Placa +' traslado' +horas + 'y tiene un Total de' + Total
            }
            exam2botton.textContent= "msg: " + msg
        }else{
            alert ('Error')
        }
    }   
}