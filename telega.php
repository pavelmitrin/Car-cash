<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5953230523:AAFVtyq-kZbDiLL9zUuHgc585C7J9LXy-Do";

//Сюда вставляем chat_id
$chat_id = "-923288912";

//Определяем переменные для передачи данных из нашей формы
	if ($_POST['form'] == 'modalFullForm') {
		$typeform = ($_POST['person1']);
		$name = ($_POST['reuiName1']);
		$phone = ($_POST['requiPhone1']);	
		
		//Собираем в массив то, что будет передаваться боту
		$arr = array(
			'Форма:' => 'Заявка',
			'Тип:' => $typeform,
			'Имя:' => $name,
			'Телефон:' => $phone
		);
	} elseif ($_POST['form'] == 'modalForm') {
		$typeform = ($_POST['person']);
		$name = ($_POST['requiName']);
		$phone = ($_POST['requiPhone']);

		//Собираем в массив то, что будет передаваться боту
		$arr = array(
			'Форма:' => 'Заявка',
			'Тип:' => $typeform,
			'Имя:' => $name,
			'Телефон:' => $phone
		);
	} else {
		$phone = ($_POST['requiPhone3']);

		//Собираем в массив то, что будет передаваться боту
		$arr = array(
			'Форма:' => 'Заявка на звонок',
			'Телефон:' => $phone
		);
	}


//Настраиваем внешний вид сообщения в телеграме
   foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
   };

//Передаем данные боту
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
   if ($sendToTelegram) {
		header('location: /');
	} else {
			echo '<script>
				errorSendMail();
			</script>';
	}
?>