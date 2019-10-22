	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
		$('body').tooltip({
			selector: "[data-toggle='tooltip']",
			trigger: "click"
		});

		/* Workaround for pre-filled text to not overlap with labels */
		$('input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea').each(function (element, i) {
			if ((element.value !== undefined && element.value.length > 0) || $(this).attr('placeholder') !== null) {
				$(this).siblings('label').addClass('active');
			}
			else {
				$(this).siblings('label').removeClass('active');
			}
		});

		/* Update the label color when validation fails (cannot be done via CSS alone) */
		$('label[for=form3').css('color', '#F57F29');
		$('label[for=formc').css('color', '#F57F29');
	  })

	  