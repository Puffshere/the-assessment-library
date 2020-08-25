 $(document).ready(function(){
 
	var CheckAdd = function(){
		var $input = $(this).addClass('jNiceHidden').wrap('<span class="jNiceWrapper"></span>');
		var $wrapper = $input.parent().append('<span class="jNiceCheckbox"></span>');
		/* Click Handler */
		var $a = $wrapper.find('.jNiceCheckbox').click(function(){
				var $a = $(this);
				var input = $a.siblings('input')[0];
				if (input.checked===true){
					input.checked = false;
					$a.removeClass('jNiceChecked');
				}
				else {
					input.checked = true;
					$a.addClass('jNiceChecked');
				}
				return false;
		});
		$input.click(function(){
			if(this.checked){ $a.addClass('jNiceChecked'); 	}
			else { $a.removeClass('jNiceChecked'); }
		})//.focus(function(){ $a.addClass('jNiceFocus'); }).blur(function(){ $a.removeClass('jNiceFocus'); });
		/* set the default state */
		if (this.checked){$('.jNiceCheckbox', $wrapper).addClass('jNiceChecked');}
	}

	$('.check-field input:[type="checkbox"]', this).each(CheckAdd);
 
 	$('input[type="text"]').each(function() {
		$(this).addClass( 'inp-txt' );
	});	
	$('input[type="password"]').each(function() {
		$(this).addClass( 'inp-txt' );
	});	
	
	$('.side-nav ul').children('li').last().addClass('last');
	
	$("#paymethods").fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'overlayShow'		: false
	});	
	
	$('#toc a').click(function(){
		//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
		$.scrollTo( this.hash, "slow");
		//$(this.hash).find('span.message').text( this.title );
		//return false;
	});	
 	
	jQuery.validator.addMethod("defaultInvalidUrl", function(value, element) {
		return value != element.defaultValue;
	}, "Please put your website URL in the field.");
	jQuery.validator.addMethod("defaultInvalidEmail", function(value, element) {
		return value != element.defaultValue;
	}, "Please put your e-mail in the field.");
	jQuery.validator.addMethod("defaultInvalidName", function(value, element) {
		return value != element.defaultValue;
	}, "Please put your name in the field.");
	jQuery.validator.addMethod("defaultInvalidMsg", function(value, element) {
		return value != element.defaultValue;
	}, "Please put the content of the message.");	
	
	jQuery.validator.messages.required = "";
	$("#proForm").validate({
		debug: false,
		onfocusout: true,
		onKeyUp: true,
		invalidHandler: function(form, validator){
			jQuery.scrollTo('.main-form', 1500);
		},
		rules: {
			agree: "required"
		},		
		messages: {
			www: {
				required: "Please put your website URL in the field.",
				url: "Please enter a valid URL."
			},		
			nameis: {
				required: "Please put your name in the field."
			},
			email: {
				required: "Please put your e-mail in the field.",
				email: "Please enter a valid email address, example: you@yourdomain.com"
			},
			agree: {
				required: 'Plesse select "Yes, I would like to order..."'
			}			
		},
		wrapper: "div",
		errorPlacement: function(error, element) {
			error.appendTo("div.error").hide().fadeIn(300);
        }
	});
	
	$("#contactForm").validate({
		debug: false,
		onfocusout: true,
		onKeyUp: true,
		invalidHandler: function(form, validator){
			jQuery.scrollTo('.contact-form', 1500);
		},
		messages: {
			email: {
				required: "Please put your e-mail in the field.",
				email: "Please enter a valid email address, example: you@yourdomain.com"
			},
			msg: {
				required: 'Please put the content of the message.'
			}			
		},
		wrapper: "div",
		errorPlacement: function(error, element) {
			error.appendTo("div.error").hide().fadeIn(300);
        }
	});	
	
	$(".carousel").jCarouselLite({
		start: 0,
		circular: true
	});	
	
});