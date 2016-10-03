//necesito una jugada y el valor de esa jugada va a ser piedra papel o tijera

var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt("¿Piedra, papel o tijera?");
console.log(jugadaUser);

/*Busco un número random para la selección de la opción de la computadora*/
var numRandom=Math.random()*2;
var numRedondo=Math.round(numRandom);
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
		alert("¡Computador gana!");
	} else {
		alert("¡Usuario gana!");
	}
} else if (jugadaUser=="papel"){
	if (jugadaCompu=="piedra"){
		alert("¡Usuario gana!");
	} else if (jugadaCompu=="papel"){
		alert("¡Empate!");
	} else {
		alert("¡Computador gana!");
	}
} else {
	if (jugadaCompu=="piedra"){
		alert("¡Computador gana!");
	} else if (jugadaCompu=="papel"){
		alert("¡Usuario gana!");
	} else {
		alert("¡Empate!");
	}
}