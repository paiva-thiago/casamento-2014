function someCaixas(){
  $('#info-area').delay(500).fadeOut();
  }
function surgeCaixas(){  
  $('#info-area').delay(1200).fadeIn();
  }

function some(caixa){
  $('#'+caixa).delay(500).fadeOut();
  surgeCaixas();
  }
function surge(caixa){
  someCaixas();
  $('#'+caixa).delay(1200).fadeIn();
  }  
/*** Formulário de Contato ***/
/*Formulario de contato! */
String.prototype.trim = function(){
return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
  
function valida(){
	  var ret	   = true;
	  var msgnulo   = ((document.getElementById("msg").value.trim())=='');
	  var nomenulo = ((document.getElementById("nome").value.trim())=='');
	  var emailnulo = ((document.getElementById("email").value.trim())=='');
	  var mensagem ='';
	   if (nomenulo){
		mensagem+="Preencha o Nome!\n";
		ret=false;
	  }if (emailnulo){
		mensagem+="Preencha o Email!\n";
		ret=false;
	  }
	  if (msgnulo){
		mensagem+="Preencha a Mensagem!\n";
		ret=false;
	  }
	  if (!ret)
		alert(mensagem);
	  return ret;
}


	 

   
function limpa(){
	document.	getElementById('nome')				.value='';
	document.	getElementById('email')			.value='';	
	document.	getElementById('msg')		.value='';	
}
   var ajax = false;
   function eh_ajax(){
    try {
         aj = new ActiveXObject("Microsoft.XMLHTTP");
      } 
      catch(e) {
         try {
            aj = new ActiveXObject("Msxml2.XMLHTTP");
         }
	     catch(ex) {
            try {
               aj = new XMLHttpRequest();
            }
	        catch(exc) {
               alert("Esse browser não tem recursos para uso do Ajax");
               aj = null;
            }
         }
      }
	  return aj;
   } 
   
    function postar(valor) {
	  var ajax=eh_ajax(); 
	  if(ajax) {
		 var usu  = document.getElementById("aviso"); 
	     ajax.open("POST", "envio.php", true);
		 ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		 ajax.onreadystatechange = function() {            			
			if(ajax.readyState == 1) {
			   usu.innerHTML = "Enviando...!";   
	        }
		     if(ajax.readyState == 4 ) {
			   if(ajax.responseXML) {
			      processa_xml(ajax.responseXML);
			   }
			   else {	
				   usu.innerHTML = "";
			   }
            }
         }     
		 ajax.send(valor);		 
      }else{
		alert("error");
	  }
   }
    function processa_xml(obj,usu){      
	  var dataArray   =      obj.getElementsByTagName("retorno");

		if(dataArray.length > 0) {
			var item = dataArray[0];
			var msg    =  item.getElementsByTagName("str")    [0]  .firstChild.nodeValue;						
			alert(msg);			
			limpa();
			document.getElementById("aviso").innerHTML="";
		}	  
   }
   
   function carteiro() {
	var poststr ="nome="			+ document.getElementById("nome").value
				+"&email="			+ document.getElementById("email").value
				+"&msg="			+ document.getElementById("msg").value;
				
      if (valida()){
		postar(poststr);
		
		}	
	else {
	    return false;
		}
   }     