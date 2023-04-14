let textInput = document.getElementById('text');
let copyButton = document.getElementById('copy');
let buttonC = document.getElementById('cpt');
let buttonD = document.getElementById('dcpt');

let input = document.querySelector("#entrada");

	function validarInput(letranEntrada) {
		if(!chegaLetra(letranEntrada)) {
			letranEntrada.preventDefault();
	 	 alert("Evite digitar letras maiúsculas ou caracteres especiais!");
		}
  	}

	function chegaLetra(press) {
		var letra = String.fromCharCode(press.keyCode);
		var pattern = '[a-z ]';
		if (letra.match(pattern)) {
			return true;
		}
	}

	function criptografa(){	
		let mensagem=[];
		let textoE =document.getElementById('entrada').value;
		codificando=Array.from(textoE);
		for (letra in codificando){
			if(codificando[letra]=="a"){
				mensagem.push("ai");
			}else if(codificando[letra]=="e"){
				mensagem.push("enter");
			}else if(codificando[letra]=="i"){
				mensagem.push("imes");
			}else if(codificando[letra]=="o"){
				mensagem.push("ober");
			}else if(codificando[letra]=="u"){
				mensagem.push("ufat");
			}else{
				mensagem.push(codificando[letra]);
			}
		}
				textInput.value=mensagem.join("");
	}
		
	function descriptografa(){
		let textoE =document.getElementById('entrada').value;
		mensagemDescriptografada=textoE.replace(/ai/g,"a");
		mensagemDescriptografada=mensagemDescriptografada.replace(/enter/g,"e");
		mensagemDescriptografada=mensagemDescriptografada.replace(/imes/g,"i");
		mensagemDescriptografada=mensagemDescriptografada.replace(/ober/g,"o");
		mensagemDescriptografada=mensagemDescriptografada.replace(/ufat/g,"u");
			textInput.value=mensagemDescriptografada;		 
	}
	function copiaTexto(){
		textInput.select();
		document.execCommand('copy');
	}
	input.addEventListener("keypress", validarInput);
	copyButton.onclick = copiaTexto;
	buttonC.onclick = criptografa;
	buttonD.onclick = descriptografa;