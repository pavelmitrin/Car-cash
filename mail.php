<?php
$to = "car34cash@mail.ru"; // емайл получателя данных из формы
$tema = "Заявка на заём с сайта car34cash"; // тема полученного емайла
$message = "Имя заказчика: ".$_POST['requiName']."<br>";//присвоить переменной значение, полученное из формы name=requiName
$message .= "Номер телефона: 8".$_POST['requiPhone']."<br>"; //полученное из формы name=requiPhone
$message .= "Заказчик - : ".$_POST['person']."<br>"; //полученное из формы name=person
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
 //отправляет получателю на емайл значения переменных


 if (mail($to, $tema, $message, $headers))
 {
	 echo '<script>
		 location.href= "/";
	 </script>';
 } else {
	 echo '<script>
		 errorSendMail();
	 </script>';
 }
?>