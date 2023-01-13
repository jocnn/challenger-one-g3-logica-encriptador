const txtAreaIngresoTexto = document.querySelector("#ingreso-texto")
const btnEncriptar = document.querySelector("#btn-encriptar")
const btnDesencriptar = document.querySelector("#btn-desencriptar")
const txtAreaSalidaTexto = document.querySelector("#txtarea-mensaje")
const btnCopiar = document.querySelector("#btn-copiar") 


/**
 * 		AL CARGAR PÁGINA
 */
fnShowMe(false)
fnInText()


/**
 * 		CAPTURA DE EVENTOS Y REFERENCIAS
 */

document.getElementById("btn-encriptar").onclick = (e) => {
	e.preventDefault()
	const txtEncriptador = fnEncriptar(txtAreaIngresoTexto.value.toLowerCase())
	fnShowMe(true)
	txtAreaSalidaTexto.value = txtEncriptador
	txtAreaIngresoTexto.value = ""
}


/**
 * 		FUNCIONES 
 */

function fnInText() {
	var ingresoTexto = document.querySelector("#ingreso-texto")
	ingresoTexto.addEventListener("keypress", function (e) {
		var keyCode = (e.keyCode ? e.keyCode : e.which)
		
		// console.log(keyCode)
		if (keyCode > 47 && keyCode < 65) {
			e.preventDefault();
		}
	})
}

function fnEncriptar(texto) {
	let resultado = texto
		.replace(/e/, "enter")
		.replace(/i/, "imes")
		.replace(/a/, "ai")
		.replace(/o/, "ober")
		.replace(/u/, "ufat")
	
	console.log("texto encriptado...", resultado)
	return resultado
}

function fnShowMe(showme) {
	if (showme) {
		document.getElementById("texto-desencriptado").style.display = "block"
		document.getElementById("mensajes-y-munheco").style.display = "none"
	} else {
		document.getElementById("texto-desencriptado").style.display = "none"
		document.getElementById("mensajes-y-munheco").style.display = "block"
	}
}

