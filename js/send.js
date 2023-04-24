$('.telegram-form').on('submit', function (event) {

	event.stopPropagation();
	event.preventDefault();

	let form = this,
		 submit = $('.submit', form),
		 data = new FormData()


	$('.submit', form).val('Отправка...');
	$('input, textarea', form).attr('disabled','');

	data.append( 'name', 		$('[name="name"]', form).val() );
	data.append( 'phone', 		$('[name="phone"]', form).val() );
	data.append( 'email', 		$('[name="email"]', form).val() );
	data.append( 'text', 		$('[name="text"]', form).val() );
  

	
	$.ajax({
		 url: 'ajax.php',
		 type: 'POST',
		 data: data,
		 cache: false,
		 dataType: 'json',
		 processData: false,
		 contentType: false,
		 xhr: function() {
			  let myXhr = $.ajaxSettings.xhr();

			  if ( myXhr.upload ) {
					myXhr.upload.addEventListener( 'progress', function(e) {
						 if ( e.lengthComputable ) {
							  let percentage = ( e.loaded / e.total ) * 100;
									percentage = percentage.toFixed(0);
							  $('.submit', form)
									.html( percentage + '%' );
						 }
					}, false );
			  }

			  return myXhr;
		 },
		 error: function( jqXHR, textStatus ) {
			  // Тут выводим ошибку
		 },
		 complete: function() {
			  // Тут можем что-то делать ПОСЛЕ успешной отправки формы
			  console.log('Complete')
			  form.reset() 
		 }
	});

	return false;
});