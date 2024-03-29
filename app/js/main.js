var regexName = /^([a-zа-яё]+|\d+)$/i;  
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябырь', 'ноябырь', 'декабырь', ]; 
var lang = ['английский', 'русский', 'украинский'];


 $(document).ready(function () {
 	$("button").on("click", "a", function (event) {
 		event.preventDefault();
 		console.log($(this).attr('href'))
 		var id = $(this).attr('href'),
 			top = $(id).offset().top;
 		$('body,html').animate({
 			scrollTop: top
 		}, 1500);
 	});

 	for (var i = 1; i <= 31; i++) {
 		$('#day')
 			.append($("<option></option>")
 				.attr("value", i)
 				.text(i));
 	}
 	for (var i = 0; i < month.length; i++) {
 		$('#month')
 			.append($("<option></option>")
 				.attr("value", month[i])
 				.text(month[i]));
 	}
 	for (var i = 1980; i <= 2005; i++) {
 		$('#year')
 			.append($("<option></option>")
 				.attr("value", i)
 				.text(i));
 	}
 	for (var i = 0; i < lang.length; i++) {
 		$('#lang')
 			.append($("<option></option>")
 				.attr("value", lang[i])
 				.text(lang[i]));
 	}

 });


$(document).on('focus', '.form input', function () {
	$(this).attr('placeholder', $(this).data('placeholder'));
});	

$(document).on('blur', '.form input', function () {
	$(this).removeAttr('placeholder');
});


$(document).on('click', '#send-form', function () {
	$('.form input, .form select').removeClass('error')
	$('.text-error, .repeat-error, .email-error, .name-error ').remove();
	$('.form').find('input').each(function () {
		if ($(this).val() == '') {
			$(this).addClass('error');
			$(this).after('<div class="text-error">Поле обязательное для заполнения</div>')
		}
	})

	$('.form').find('select').each(function () {
		if ($(this).val() == null) {
			$(this).addClass('error');
		}

	})

	if ($('.password').val() !== $('.password-repeat').val() && !($('.password, .password-repeat').hasClass('error'))) {
		$(this).addClass('error');
		$('.password-repeat').after('<div class="repeat-error">Несовпадение пароля</div>')
	}
	if ($('.name').val() != "" && !regexName.test($('.name').val())) {
		$(this).addClass('error');
		$('.name').after('<div class="name-error">Некорректное имя </div>')
	}
	if ($('.e-mail').val() != "" && !regexEmail.test($('.e-mail').val())) {
		$(this).addClass('error');
		$('.e-mail').after('<div class="email-error">Некорректный e-mail </div>')
	}
})

$(window).on('load', function() {
  $('.section-form .flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
});