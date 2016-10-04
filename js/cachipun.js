//necesito una jugada y el valor de esa jugada va a ser piedra papel o tijera

var jugadaUser;
var jugadaCompu;
var numRandom;
var numRedondo;

//la condición para detenerse es que el input sea piedra, papel o tijera

do{
	while(!(jugadaUser==="piedra" || jugadaUser==="papel" || jugadaUser==="tijera")){
		//acá pregunto al usuario
		var jugadaUser = prompt("¿piedra, papel o tijera?").toLowerCase();
		console.log(jugadaUser);
	}

	/*Busco un número random para la selección de la opción de la computadora*/
	numRandom=Math.random()*2;
	numRedondo=Math.round(numRandom);
	console.log(numRedondo);

	/*0: piedra / 1:tijera / 2:papel*/

	if (numRedondo==0){
		jugadaCompu="piedra";
	} else if (numRedondo==1){
		jugadaCompu="tijera";
	} else {
		jugadaCompu="papel";
	}

	alert("Ahora le toca al computador elegir");
	console.log(jugadaCompu);
	alert("El computador eligió: " + jugadaCompu);

	if (jugadaUser=="piedra"){
		if (jugadaCompu=="piedra"){
			alert("¡Empate!");
		} else if(jugadaCompu=="papel"){
			alert("¡La computadora gana!");
		} else {
			alert("¡Ganaste!");
		}
	} else if (jugadaUser=="papel"){
		if (jugadaCompu=="piedra"){
			alert("¡Ganaste!");
		} else if (jugadaCompu=="papel"){
			alert("¡Empate!");
		} else {
			alert("¡La computadora gana!");
		}
	} else if(jugadaUser=="tijera"){
		if (jugadaCompu=="piedra"){
			alert("¡La computadora gana!");
		} else if (jugadaCompu=="papel"){
			alert("¡Ganaste!");
		} else {
			alert("¡Empate!");
		}
	} else {
		alert("La palabra no corresponde");
	}
	jugadaUser ="Cualquier cosa";
	var confirmacion= window.confirm("¿Desea jugar de nuevo?");
}
while(confirmacion==true);