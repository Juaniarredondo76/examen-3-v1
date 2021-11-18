var estado = prompt ('Fijo o temporal')
var trabajador = prompt('Ingrese el nombre sabiendo que es fijo temporal');
var horas = prompt('Ingrese el numero de horas trabajadas');
var salarico = prompt (' ingrese el salario basico por horas');
var deduciones = prompt ('ingrese la deducciones si ere trabajador fijo o temporal');
var bonificacion = prompt ('ingrese la bonificacion asignada');
var respuesta  
var msg

if ((trabajador == 'Fijo' || trabajador == 'fijo' )){
  respuesta = horas*salarico*deduciones*bonificacion  
    }
    else if  (( trabajador == 'Temporal' || trabajador == 'temporal')){
      respuesta = 60000000*horas
    }
    msg = alert (' El trabajador ' + trabajador+ ' tiene un estado ' + estado + ' y tuvo un salario neto de: ' + respuesta )
   