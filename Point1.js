var Placa = prompt('Ingrese la Placa de autobus designado');
var Pasajeros = prompt('Ingrese la cantidad de Pasajeros que ingresaron al autobus' );
var Ruta = prompt ('Digite la Ruta  (a o b)  que fue designado el autobus' + Placa )
var Total 
var msg

if ( Ruta == 'A' || Ruta == 'a' ){
 Total = Pasajeros*1200
    }
    else if  (( Ruta == 'B' || Ruta == 'b')){
     Total = Pasajeros*1000
    }
    msg = alert ( ' El vehiculo: ' + Placa +' traslado ' + Pasajeros + ' pasajetos ' + ' y tiene un Total de ' + Total)