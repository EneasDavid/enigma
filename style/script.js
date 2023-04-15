let buttonC = document.getElementById('cpt');
let buttonD = document.getElementById('dcpt');
let divpalceHolder =document.querySelector('.resultBox');

function mudaTela(){
	divpalceHolder.innerHTML = "<div class='placeholder'><button id='copy' style='display:none'></button><h2>Nenhuma mensagem encontrada</h2><br><h3>Digite um texto que você deseja criptografar ou descriptografar.</h3></div>";
}
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
		let textoE =document.getElementById('entrada').value;
		if(textoE!=""){
			let mensagem=[];
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
			divpalceHolder.innerHTML ='<div><textarea id="text" class="resultArea" readonly></textarea><button class="buttons btCopy" id="copy">Copiar</button></div>';
			document.getElementById('text').value=mensagem.join("");
			document.getElementById('copy').onclick = copiaTexto;
		}else{
			mudaTela();
		}
	}

	function descriptografa(){
		let textoE =document.getElementById('entrada').value;
		if(textoE!=""){
			mensagemDescriptografada=textoE.replace(/ai/g,"a");
			mensagemDescriptografada=mensagemDescriptografada.replace(/enter/g,"e");
			mensagemDescriptografada=mensagemDescriptografada.replace(/imes/g,"i");
			mensagemDescriptografada=mensagemDescriptografada.replace(/ober/g,"o");
			mensagemDescriptografada=mensagemDescriptografada.replace(/ufat/g,"u");
			divpalceHolder.innerHTML ='<div><textarea id="text" class="resultArea" readonly></textarea><button class="buttons btCopy" id="copy">Copiar</button></div>';
			document.getElementById('text').value=mensagemDescriptografada;
			document.getElementById('copy').onclick = copiaTexto;
		}else{
			mudaTela();
		}
	}
	function copiaTexto(){
		document.getElementById('text').select();
		document.execCommand('copy');
	}

	mudaTela();
	input.addEventListener("keypress", validarInput);
	buttonC.onclick = criptografa;
	buttonD.onclick = descriptografa;	
