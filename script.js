$(document).ready(function(){
		$('#menu-cortina').css('right','-290px');
		$('#cerrar').hide();
		
		$('#abrir').click(function(){
			$('#menu-cortina').css({
				right: 0
			},800,'easeOutExpo');
			$('#abrir').hide();
			$('#cerrar').show();
			event.preventDefault();
		});
		
		$('#cerrar').click(function(){
			$('#menu-cortina').css({
				right: -290
			},800,'easeOutExpo');
			$('#abrir').show();
			$('#cerrar').hide();
			event.preventDefault();
		});
	});