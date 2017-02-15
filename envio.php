<?php
  header ("content-type: text/xml");
  ini_set("SMTP","smtp.thiagopaiva.com"); 
  ini_set ("sendmail_from","contato@thiagopaiva.com");
  $headers = '';
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
  $nome=$_POST["nome"];
  $email=$_POST["email"];
  $msg=$_POST["msg"];
  $msg='<h1>Contato</h1><hr/><b>Nome:</b>'.$nome.'<br/><b>Email:</b>'.$email.'<br/>'.$msg;
 
  $status_envio = @mail ('contato@thiagopaiva.com;paiva.thiago@gmail.com;carvalho.aline.paiva@gmail.com', '[Casório]Contato via Site', $msg, $headers);
  
  if ( $status_envio == TRUE )
  {
	$xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>
	<retorno>
		<str>Email enviado com sucesso!</str>
	</retorno>
	";
  }
  else
  {
    $xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>
	<retorno>
		<str>Houve uma falha no envio!\n tente em instantes!</str>
	</retorno>
	";
  }
  echo $xml;
?> 