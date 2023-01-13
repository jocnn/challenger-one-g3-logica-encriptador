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

btnEncriptar.onclick = (e) => {
	e.preventDefault()
	const txtEncriptador = fnEncriptar(txtAreaIngresoTexto.value.toLowerCase())
	fnShowMe(true)
	txtAreaSalidaTexto.value = txtEncriptador
	txtAreaIngresoTexto.value = ""
}

btnDesencriptar.onclick = (e) => {
	e.preventDefault()
	const txtDesencriptar = fnDesencriptar(txtAreaIngresoTexto.value)
	fnShowMe(true)
	txtAreaSalidaTexto.value = txtDesencriptar
	txtAreaIngresoTexto.value = ""
}

btnCopiar.onclick = (e) => {
	e.preventDefault()
	const capturarTexto = document.querySelector("#txtarea-mensaje")
	console.log(capturarTexto)
	capturarTexto.select()
	navigator.clipboard.writeText(capturarTexto.value)
	capturarTexto.value = ""
	fnShowMe(false)
}

var changes = () => {
	fnEnabledButton(false)
}

/**
 * 		FUNCIONES 
 */

function fnInText() {
	txtAreaIngresoTexto.addEventListener("keypress", function (e) {
		var keyCode = e.keyCode ? e.keyCode : e.which
		// console.log(keyCode)
		fnEnabledButton(false)
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

function fnDesencriptar(texto) {
	let resultado = texto
		.replace(/enter/, "e")
		.replace(/imes/, "i")
		.replace(/ai/, "a")
		.replace(/ober/, "o")
		.replace(/ufat/, "u")
	
	console.log("texto desencriptado...", resultado)
	return resultado
}

function fnShowMe(showme) {
	fnEnabledButton(true)
	if (showme) {
		document.getElementById("texto-desencriptado").style.display = "block"
		document.getElementById("mensajes-y-munheco").style.display = "none"
	} else {
		document.getElementById("texto-desencriptado").style.display = "none"
		document.getElementById("mensajes-y-munheco").style.display = "block"
	}
}

function fnEnabledButton(activation) {
		btnEncriptar.disabled = activation
		btnDesencriptar.disabled = activation
}